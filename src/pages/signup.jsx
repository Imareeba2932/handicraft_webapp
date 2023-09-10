import React from 'react';
import { useFormik } from 'formik';
import {Link, useNavigate} from 'react-router-dom';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Email is invalid').required('Required'),
});

function Signup() {

  const navigate = useNavigate();

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      reppassword: '',  
    },

    onSubmit: (values) => {
      console.log(values);
      navigate('/login');
    },

    validationSchema: SignupSchema
  })

  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: 25 }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>
                    <form className="mx-1 mx-md-4" onSubmit={signupForm.handleSubmit}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw" />
                        <div className=" flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example1c">
                            Your Name
                          </label>

                          <span style={{color: 'red', fontSize: 10, marginLeft: 10}}>{signupForm.touched.name && signupForm.errors.name}</span>
                          <input
                            type="text"
                            id="name"
                            onChange={signupForm.handleChange}
                            value={signupForm.values.name}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                        <div className=" flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example3c">
                            Your Email
                          </label>
                          <span style={{color: 'red', fontSize: 10, marginLeft: 10}}>{signupForm.touched.email && signupForm.errors.email}</span>
                          <input
                            type="email"
                            id="email"
                            onChange={signupForm.handleChange}
                            value={signupForm.values.email}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw" />
                        <div className=" flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example4c">
                            Password
                          </label>
                          <input
                            type="password"
                            id="password"
                            onChange={signupForm.handleChange}
                            value={signupForm.values.password}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw" />
                        <div className=" flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example4cd">
                            Repeat your password
                          </label>
                          <input
                            type="password"
                            id="reppassword"
                            onChange={signupForm.handleChange}
                            value={signupForm.values.reppassword}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue=""
                          id="form2Example3c"
                        />
                        <label className="form-check-label" htmlFor="form2Example3">
                          I agree all statements in{" "}
                          <a href="#!">Terms of service</a>
                        </label>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className="btn btn-primary btn-lg">
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
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

export default Signup