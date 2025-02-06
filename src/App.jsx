import { useState } from 'react';
import './App.css';
function App() {
  const [dataForm, setDataForm] = useState({
    firstname: "",
    lastname: "",
    middlename: "",
    email: "",
    phone: "",
    profile_picture: null
  });

  const fieldChange = (e) => {
    const { name, value } = e.target;
    setDataForm((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const fileChange = (e) => {
    const file = e.target.files[0];
    setDataForm((prevData) => ({
      ...prevData,
      profile_picture: file
    }));
  };

  const submit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("firstname", dataForm.firstname);
    form.append("lastname", dataForm.lastname);
    form.append("middlename", dataForm.middlename);
    form.append("email", dataForm.email);
    form.append("phone", dataForm.phone);
    form.append("profile_picture", dataForm.profile_picture);

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        body: form,
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <>
      <div className='mt-5 container'>
          <h3 className='text-center mb-4 mt-5 control-heading'>A simple user registration </h3>
          <form onSubmit={submit} encType="multipart/form-data">
            <div className="row d-flex flex-column align-items-center">
              <div className="col-12 col-lg-4 col-md-5 col-sm-6 mb-3">
                <input
                  id='profile_picture_input'
                  type="file" 
                  name="profile_picture" 
                  accept="image/png,image/jpeg" 
                  onChange={fileChange} 
                  className="form-control d-none" 
                />
                <label htmlFor="profile_picture_input" className="form-control text-center btn btn-light">
                  Select Profile Picture
                </label>
              </div>

              <div className="col-12 col-lg-4 col-md-5 col-sm-6 mb-3">
                <input 
                  type="text" 
                  name="firstname" 
                  id="u_fname" 
                  placeholder='First Name' 
                  value={dataForm.firstName} 
                  onChange={fieldChange} 
                  required 
                  className="form-control" 
                />
              </div>

              <div className="col-12 col-lg-4 col-md-5 col-sm-6 mb-3">
                <input 
                  type="text" 
                  name="lastname" 
                  id="u_lname" 
                  placeholder='Last Name' 
                  value={dataForm.lastname} 
                  onChange={fieldChange} 
                  required 
                  className="form-control" 
                />
              </div>

              <div className="col-12 col-lg-4 col-md-5 col-sm-6 mb-3">
                <input 
                  type="text" 
                  name="middlename" 
                  id="u_mname" 
                  placeholder='Middle Name' 
                  value={dataForm.middlename} 
                  onChange={fieldChange} 
                  required 
                  className="form-control" 
                />
              </div>

              <div className="col-12 col-lg-4 col-md-5 col-sm-6 mb-3">
                <input 
                  type="email" 
                  name="email" 
                  id="u_email" 
                  placeholder='Email' 
                  value={dataForm.email} 
                  onChange={fieldChange} 
                  required 
                  className="form-control" 
                />
              </div>

              <div className="col-12 col-lg-4 col-md-5 col-sm-6 mb-3">
                <input 
                  type="tel" 
                  pattern="^\d{11}$" 
                  placeholder="e.g. 09123456789" 
                  name="phone" 
                  id="u_phone" 
                  value={dataForm.phone} 
                  onChange={fieldChange} 
                  required 
                  className="form-control" 
                />
              </div>

              <div className="col-12 col-lg-4 col-md-5 col-sm-6 mb-3 d-flex justify-content-center">
                <input 
                  type="submit" 
                  className='btn btn-primary w-50' 
                  value={'Register'} 
                />
              </div>
            </div>
          </form>
        </div>
    </>
  );
}

export default App;
