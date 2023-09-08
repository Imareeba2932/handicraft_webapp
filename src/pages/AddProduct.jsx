import React from 'react'
import {useFormik} from 'formik' ;

function AddProduct() {

  const loginForm = useFormik({
    initialValues: {
      productname: '',
      totalquantity: '',
      productid: '',
      totalprize: '',
      productdescription: '',

    },

    onSubmit: (values) => {
      console.log(values);
    }
  })

  return (
    <section className="h-100 bg-dark">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card card-registration my-4">
          <div className="row g-0">
            <div className="col-xl-6 d-none d-xl-block">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                alt="Sample photo"
                className="img-fluid"
                style={{
                  borderTopLeftRadius: ".25rem",
                  borderBottomLeftRadius: ".25rem"
                }}
              />
            </div>
            <div className="col-xl-6">
              <div className="card-body p-md-5 text-black">
                <h3 className="mb-5 text-uppercase">
                  Product ID
                </h3>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-o">
                      <label className="form-label" htmlFor="form3Example1m">
                        Product Name
                      </label>
                      <input
                        type="text"
                        id="form3Example1m"
                        className="form-control form-control-lg"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-o">
                      <label className="form-label" htmlFor="form3Example1n">
                        Total Quantity
                      </label>
                      <input
                        type="text"
                        id="form3Example1n"
                        className="form-control form-control-lg"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-o">
                      <label className="form-label" htmlFor="form3Example1m1">
                        Product ID
                      </label>
                      <input
                        type="text"
                        id="form3Example1m1"
                        className="form-control form-control-lg"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-o">
                      <label className="form-label" htmlFor="form3Example1n1">
                        Total Prize
                      </label>
                      <input
                        type="text"
                        id="form3Example1n1"
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
                    id="form3Example8"
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label" htmlFor="form3Example8">
                    Product Weight
                  </label>
                  <input
                    type="text"
                    id="form3Example8"
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                  <h6 className="mb-0 me-4">Gender: </h6>
                  <div className="form-check form-check-inline mb-0 me-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="femaleGender"
                      defaultValue="option1"
                    />
                    <label className="form-check-label" htmlFor="femaleGender">
                      Female
                    </label>
                  </div>
                  <div className="form-check form-check-inline mb-0 me-4">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="maleGender"
                      defaultValue="option2"
                    />
                    <label className="form-check-label" htmlFor="maleGender">
                      Male
                    </label>
                  </div>
                  <div className="form-check form-check-inline mb-0">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="otherGender"
                      defaultValue="option3"
                    />
                    <label className="form-check-label" htmlFor="otherGender">
                      Other
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <select className="select">
                      <option value={1}>State</option>
                      <option value={2}>Option 1</option>
                      <option value={3}>Option 2</option>
                      <option value={4}>Option 3</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-4">
                    <select className="select">
                      <option value={1}>City</option>
                      <option value={2}>Option 1</option>
                      <option value={3}>Option 2</option>
                      <option value={4}>Option 3</option>
                    </select>
                  </div>
                </div>
                <div className="d-flex justify-content-end pt-3">
                  <button type="button" className="btn btn-light btn-lg">
                    Reset all
                  </button>
                  <button type="button" className="btn btn-warning btn-lg ms-2">
                    Submit form
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default AddProduct