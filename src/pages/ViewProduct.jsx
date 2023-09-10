import React, { useState } from 'react';
import {useParams} from 'react-router-dom';

function ViewProduct() {

  const {index} = useParams();
  const localData = JSON.parse(localStorage.getItem('productData'));
  const [productData, setProductData] = useState(localData[index]);

  const showProduct = () => {
    if(productData !== null){
      return <div className='container mt-5'>
        <div className='row'>
          <div className="col-md-4">
            <img className='w-100' src={productData.image} alt="" />
          </div>
          <div className="col-md-8">
            <h5>{productData.category}</h5>
            <h1>{productData.name}</h1>
          </div>
        </div>
      </div>
    }
  }

  return (
    <div>
      {showProduct()}
    </div>
  )
}

export default ViewProduct