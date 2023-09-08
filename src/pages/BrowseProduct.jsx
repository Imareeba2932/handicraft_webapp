import React, { useEffect, useState } from "react";
import productList from "./DummyData";

const Browse = () => {
  const [productData, setProductData] = useState(productList);

  const brands = ["Asus", "Acer", "HP", "Dell", "Lenovo", "Apple"];

  const [selOptions, setSelOptions] = useState([]);

  const product = () => {
    return productData.map((laptop) => (
      <div className="col-md-3 mb-4">
        <div className="card">
          <img className="card-img-top" src={laptop.image} alt="" />
          <div className="card-body">
            <h4>{laptop.name}</h4>
            <h3>{laptop.category}</h3>
            <h2>₹{laptop.prize}</h2>
          </div>
        </div>
      </div>
    ));
  };

  const searchProduct = (e) => {
    const search = e.target.value;
    const result = laptopList.filter((laptop) => {
      return laptop.model.toLowerCase().includes(search.toLowerCase());
    });
    setProductData(result);
  };

  const filterBrand = (e) => {
    if (e.target.value === "") return setProductData(productList);
    const selProduct = e.target.value;
    const result = productList.filter((product) => {
      return product.brand === selProduct;
    });
    setData(result);
  };

  const selectOption = (brand) => {
    if(selOptions.includes(brand)) {
        setSelOptions(selOptions.filter((b) => b !== brand));
    }else{
        setSelOptions([...selOptions, brand]);
    }
  }

  useEffect(() => {
    if(selOptions.length === 0) return setProductData(productList);
    setProductData(productList.filter((product) => {
        return selOptions.includes(product.brand);
    }))
  }, [ selOptions ]);
  

  return (
    <div>
      <header className="bg-dark text-white">
        <div className="container py-5">
          <h1 className="text-center">Browse Product</h1>
          <hr />
          <input type="text" className="form-control" onChange={searchProduct} />

          <div className="row mt-4">
            <div className="col-md-4">
              <select className="form-control" onChange={filterBrand}>
                <option value="">Select Brand</option>
                {brands.map((b) => (
                  <option value={b}>{b}</option>
                ))}
              </select>
            </div>

            <div className="col-md-4 my-auto">
                <input checked={selOptions.includes('Asus')} onClick={() => {selectOption('Asus')}} className="form-check-input" type="checkbox" /> Asus&nbsp;&nbsp;&nbsp;
                <input checked={selOptions.includes('HP')} onClick={() => {selectOption('HP')}} className="form-check-input" type="checkbox" /> HP&nbsp;&nbsp;&nbsp;
                <input checked={selOptions.includes('Acer')} onClick={() => {selectOption('Acer')}} className="form-check-input" type="checkbox" /> Acer&nbsp;&nbsp;&nbsp;
                <input checked={selOptions.includes('Lenovo')} onClick={() => {selectOption('Lenovo')}} className="form-check-input" type="checkbox" /> Lenovo&nbsp;&nbsp;&nbsp;
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="row">{displayData()}</div>
      </div>
    </div>
  );
};

export default Browse;