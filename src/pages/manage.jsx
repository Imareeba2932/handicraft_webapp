import React, { useEffect, useState } from "react";
import localData from "./DummyData";

const ManageProduct = () => {
  const localData = JSON.parse(localStorage.getItem('productData'));
  const [productData, setProductData] = useState(localData !== null ? localData : []);

  const brands = ["Asus", "Acer", "HP", "Dell", "Lenovo"];

  const [selOptions, setSelOptions] = useState([]);

  const product = () => {
    return productData.map((product, index) => (
      <tr>
        <td>
          <img style={{height: 50}} src={product.image} alt="" />
          </td>
        <td>{product.name}</td>
        <td>{product.prize}</td>
        <td>{product.material}</td>
        <td>{product.category}</td>
        <td>{product.description}</td>
        <td>
        <button className="btn btn-danger" onClick={() => {deleteProduct(index)}}>Delete</button>
        </td>
      </tr>
    ));
  };

  const deleteProduct = (index) => {
    console.log(index);

    // todoList.splice(index, 1);  don't do this since its readonly

    const temp = productData;
    temp.splice(index, 1);

    setProductData([...temp]);
    localStorage.setItem('productData', JSON.stringify(temp));

  }


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
      <header className="bg-dark text-white">
        <div className="container py-5">
          <h1 className="">Manage Product</h1>
          <hr />

          <div className="row mt-4">
            <div className="col-md-4">

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



      <div className="container mt-5">

        <table className="table table-dark">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Material</th>
              <th>Category</th>
              <th colSpan={2}>Description</th>
            </tr>
          </thead>
          <tbody>   
            {product()}
          </tbody>
        </table>
      </div>

    </div>
    
  );
};

export default ManageProduct;