import React, { useState } from "react";

const Contact = () => {
    const [data,setData] = useState({
        fullname:'',
        phone:'',
        email:'',
        message:''
    })

    const inputEvent = (e)=>{
       const {name,value} = e.target;
       setData((prev)=>{
           return {
               ...prev,
               [name] : value,
           }
       })
    }
    const formSubmit = (e)=>{
        e.preventDefault();
        alert(`My name is ${data.fullname}. My mobile number is ${data.phone}. My email id is ${data.email}. At the end i want to say that ${data.message}`  )
        setData({
            fullname:'',
            phone:'',
            email:'',
            message:''
        })

    }
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row mb-5">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your name"
                  name='fullname'
                  value={data.fullname}
                  onChange={inputEvent}
                  required
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Mobile Number
                </label>
                <input
                  type='phone'
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your mobile number"
                  name='phone'
                  value={data.phone}
                  onChange={inputEvent}
                  required
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                 Email address
                </label>
                <input
                  type='email'
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  name='email'
                  value={data.email}
                  onChange={inputEvent}
                  required
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name='message'
                  value={data.message}
                  onChange={inputEvent}
                  
                ></textarea>
              </div>
              <div className='col-12'>
                  <button className='btn btn-outline-primary' type='submit'>Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
