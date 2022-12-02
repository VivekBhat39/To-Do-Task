import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Contact() {

  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: ""
  });

  const [userValidation, setUserValidation] = useState({
    firstNameMessage: "",
    lastName: "",
    lastNameMessage: "",
    phoneNumberMessage: ""
  })

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value })
    // console.log(data);
  }

  // function handleSubmit(e) {
  //   localStorage.setItem("employee", JSON.stringify(data))
  //   console.log(data);
  //   navigate("/")
  // }

  function handleSubmit(e) {
    let validated = true;
    let firstNameMessage = "";
    let lastNameMessage = "";
    let emailMessage = "";
    let phoneNumberMessage = "";

    if (data.firstName.trim() === "") {
      firstNameMessage = "Please Enter First Name";
      validated = false
    }
    if (data.lastName.trim() === "") {
      lastNameMessage = "Please Enter Last Name";
      validated = false
    }
    if (data.email.trim() === "") {
      emailMessage = "Please Enter Email";
      validated = false
    }
    else if (!/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
      emailMessage = "Please Enter Valid Email";
      validated = false
    }
    if (data.phoneNumber.trim() === "") {
      phoneNumberMessage = "Please Enter Phone Number";
      validated = false
    }
    else if (!/^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[789]\d{9}$/.test(data.phoneNumber)) {
      phoneNumberMessage = "Please Enter Phone Number";
      validated = false
    }

    if (!validated) {
      setUserValidation({
        firstNameMessage: firstNameMessage,
        lastNameMessage: lastNameMessage,
        emailMessage: emailMessage,
        phoneNumberMessage: phoneNumberMessage
      }
      )
      return;
    }

    localStorage.setItem("employee", JSON.stringify(data))
    console.log(data);
    navigate("/")
  }


  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-90">
            <div className="col-lg-6">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-3 mt-2">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-10 col-xl-10 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-4 mx-1 mx-md-4 mt-4">Sign up</p>

                      <div className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label">First Name <span className='text-danger'>{userValidation.firstNameMessage}</span></label>
                            <input type="text" name="firstName" value={data.firstName} onChange={(e) => handleChange(e)} className="form-control" />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label">Last Name <span className='text-danger'>{userValidation.lastNameMessage}</span></label>
                            <input type="email" name="lastName" value={data.lastName} onChange={(e) => handleChange(e)} className="form-control" />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label">Email Id  <span className='text-danger'>{userValidation.emailMessage}</span></label>
                            <input type="email" name="email" value={data.email} onChange={(e) => handleChange(e)} className="form-control" />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" >Phone Number  <span className='text-danger'>{userValidation.phoneNumberMessage}</span></label>
                            <input type="number" name="phoneNumber" value={data.phoneNumber} onChange={(e) => handleChange(e)} className="form-control" />
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" onClick={(e) => handleSubmit(e)} className="btn btn-primary btn-lg">Submit</button>
                        </div>

                      </div>



                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
