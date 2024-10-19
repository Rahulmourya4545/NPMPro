import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: '',
    phone: '',
    email: '',
    masg: '',
  });

  const InputEvent = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", data);
  };

  return (
    <>
      <div className="pt-5 contact_div">
        <h1 className="text-center">Contact us</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto pt-3">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                    placeholder="name@example.com"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="fullname" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullname"
                    name="fullname"
                    value={data.fullname}
                    onChange={InputEvent}
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone no
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={data.phone}
                    onChange={InputEvent}
                    placeholder="Phone no"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="masg" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="masg"
                    name="masg"
                    value={data.masg}
                    onChange={InputEvent}
                    rows="3"
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <div className="col-md-12 form_submit_btn">
                  <button className="btn btn-primary" type="submit">
                    Submit Form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
