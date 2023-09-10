import React from 'react'
import { useFormik } from 'formik';

function AddProduct() {

  const storeDataToSession = (data) => {
    const sessionData = localStorage.getItem('productData');
    console.log(sessionData);

    if(sessionData!==null){
      // convert to javascript from json
      const productData = JSON.parse(sessionData);
      productData.push(data);
      localStorage.setItem('productData', JSON.stringify(productData));
    }else{
      localStorage.setItem('productData', JSON.stringify([data]));
    }
  }

  const productForm = useFormik({
    initialValues: {
      name: '',
      material: '',
      category: '',
      prize: '',
      description: '',
      image: '',

    },

    onSubmit: (values) => {
      // console.log(values);
      storeDataToSession(values);
      // convert to JSON from javascript
      // localStorage.setItem('productData', JSON.stringify(values));

    }
  })

  return (
    <section className="h-100 bg-dark">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <form onSubmit={productForm.handleSubmit}>
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block form-bg" >
                   
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase">
                        Add Your Product
                      </h3>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-o">
                            <label className="form-label" htmlFor="form3Example1m">
                              Product Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              onChange={productForm.handleChange}
                              value={productForm.values.name}
                              className="form-control form-control-lg"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-o">
                            <label className="form-label" htmlFor="form3Example1n">
                              Material
                            </label>
                            <input
                              type="text"
                              id="material"
                              onChange={productForm.handleChange}
                              value={productForm.values.material}
                              className="form-control form-control-lg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-o">
                            <label className="form-label" htmlFor="form3Example1m1">
                              Category
                            </label>
                            <input
                              type="text"
                              id="category"
                              onChange={productForm.handleChange}
                              value={productForm.values.category}
                              className="form-control form-control-lg"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-o">
                            <label className="form-label" htmlFor="form3Example1n1">
                               Prize
                            </label>
                            <input
                              type="text"
                              id="prize"
                              onChange={productForm.handleChange}
                              value={productForm.values.prize}
                              className="form-control form-control-lg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="form-label" htmlFor="form3Example8">
                          Product Description
                        </label>
                        <input
                          type="text"
                          id="description"
                          onChange={productForm.handleChange}
                          value={productForm.values.description}
                          className="form-control form-control-lg"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="form-label" htmlfor="form3Example8">
                          Product Image
                        </label>
                        <input
                          type="string"
                          id="image"
                          onChange={productForm.handleChange}
                          value={productForm.values.image}
                          className='form-control form-control-lg'
                        />
                      </div>
                      
                      
                      <div className="d-flex justify-content-end pt-3">
                        <button type="submit" className="btn btn-light btn-lg">
                          Reset all
                        </button>
                        <button type="submit" className="btn btn-warning btn-lg ms-2">
                          Submit form
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default AddProduct