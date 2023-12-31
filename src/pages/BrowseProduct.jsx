import React, { useEffect, useState } from "react";
import localData from "./DummyData";
import {Link} from 'react-router-dom';

const Browse = () => {
  const localData = JSON.parse(localStorage.getItem('productData'));
  const [productData, setProductData] = useState(localData !== null ? localData : [] );

  const brands = ["Wooden", "Plastic", "Iron", "Bronze", "Brass", "Metal", "Polystone"];

  const [selOptions, setSelOptions] = useState([]);

  const formatName = (text) => {
    return text.slice(0, 60) + (text.length > 60 ? '...' : '');
  }

  const product = () => {
    return productData.map((product, index) => (
      <div className="col-md-4 mb-4">
        <div className="card">
          <img style={{height: 250, objectFit: 'cover'}} className="card-img-top" src={product.image} alt="" />
          <div className="card-body" style={{minHeight:200}}>
            <p className="text-muted m-0">{product.category}</p>
            <h5 className="m-0">{formatName(product.name)}</h5>
            <h4 className="mt-3">₹{product.prize}</h4>
          </div>
          <div className="card-footer">
            <Link className="btn btn-primary" to={'/ViewProduct/'+index}>View Details</Link>
          </div>
        </div>
      </div>
    ));
  };


  const searchProduct = (e) => {
    const search = e.target.value;
    const result = localData.filter((product) => {
      return product.name.toLowerCase().includes(search.toLowerCase())
    });
    setProductData(result);
  };

  const filterBrand = (e) => {
    if (e.target.value === "") return setProductData(localStorage);
    const selProduct = e.target.value;
    const result = localData.filter((product) => {
      return product.brand === selProduct;
    });
    setProductData(result);
  };

  const selectOption = (brand) => {
    if (selOptions.includes(brand)) {
      setSelOptions(selOptions.filter((b) => b !== brand));
    } else {
      setSelOptions([...selOptions, brand]);
    }
  }

  // useEffect(() => {
  //   if (selOptions.length === 0) return setProductData(localStorage);
  //   setProductData(localStorage.filter((product) => {
  //     return selOptions.includes(product.brand);
  //   }))
  // }, [selOptions]);


  return (
    <div>
      <header className="bgimg text-white">
        <div className="container py-3">
          <h1 className="text text-center">Browse Product</h1>
          <hr />
          <input  type="text" className="input form-control" onChange={searchProduct} />

          <div className="row mt-4">
            <div className="col-md-4">
              <select className="form-control" onChange={filterBrand}>
                <option value="">Select Brand</option>
                {brands.map((b) => (
                  <option value={b}>{b}</option>
                ))}
              </select>
            </div>

            {/* <div className="col-md-4 my-auto">
              <input checked={selOptions.includes('Asus')} onClick={() => { selectOption('Asus') }} className="form-check-input" type="checkbox" /> Asus&nbsp;&nbsp;&nbsp;
              <input checked={selOptions.includes('HP')} onClick={() => { selectOption('HP') }} className="form-check-input" type="checkbox" /> HP&nbsp;&nbsp;&nbsp;
              <input checked={selOptions.includes('Acer')} onClick={() => { selectOption('Acer') }} className="form-check-input" type="checkbox" /> Acer&nbsp;&nbsp;&nbsp;
              <input checked={selOptions.includes('Lenovo')} onClick={() => { selectOption('Lenovo') }} className="form-check-input" type="checkbox" /> Lenovo&nbsp;&nbsp;&nbsp;
            </div> */}
          </div>
        </div>
      </header>



      <div className="container mt-4">
        <div className="row">
          {product()}


        </div>
      </div>
    </div>
  );
};

export default Browse;