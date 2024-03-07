import React, { useState, useEffect } from 'react';
import './booking.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Booking = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    city: '',
    pin: '',
    state: '',
    company: '',
    vehicleModel: '',
    subModel: '',
  });

  // State for vehicle-related data
  const [companyList, setCompanyList] = useState([]);
  const [venameList, setVenameList] = useState([]);
  const [subModelList, setSubModelList] = useState([]);

  // Fetch companies when the component mounts
  useEffect(() => {
    fetchCompanies();
  }, []);

  // Fetch companies from the backend
  const fetchCompanies = () => {
    fetch('http://localhost:3005/company/getAllCompanies')
      .then((response) => response.json())
      .then((data) => {
        setCompanyList(data);
      })
      .catch((error) => {
        console.error('Error fetching companies:', error);
      });
  };

  // Fetch vehicle models and sub-models based on selected company
  const fetchVehicleModels = (company) => {
    fetch(`http://localhost:3005/vehicle/vmodel/getVehicleModels/${company}`)
      .then((response) => response.json())
      .then((data) => {
        setVenameList(data.data);
        // Also fetch Sub Models based on the selected Vehicle Model
        setSubModelList(data.data.map((model) => model.Subname).filter(Boolean));
      })
      .catch((error) => {
        console.error('Error fetching vehicle models:', error);
      });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform actions with the form data (e.g., send to server or update state)
    console.log('Form submitted:', formData);

    // Call the function to save data to the server
    saveData();
  };

  // Function to save data to the server
  const saveData = () => {
    const formDataToSave = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      city: formData.city,
      pin: formData.pin,
      state: formData.state,
      company: formData.company,
      vehicleModel: formData.vehicleModel,
      subModel: formData.subModel,
    };

    fetch('http://localhost:3005/booking/booking', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formDataToSave),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        alert('Record saved');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <Navbar />
      <br></br>
      <div className="booking-container">
        <b>
          <center>
            <h1 style={{ color: 'white' }}>Enter Your Information</h1>
          </center>
        </b>
        {/* Form */}
        <form className="booking-form" onSubmit={handleSubmit}>
          <label className="label">
            First Name:
            <input className="input" type="text" value={formData.firstName} 
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
          </label>

          <label className="label">
            Last Name:
            <input
              className="input"
              type="text"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
          </label>

          <label className="label">
            Email:
            <input
              className="input"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </label>

          <label className="label">
            Phone Number:
            <input
              className="input"
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            />
          </label>

          <label className="label">
            City:
            <input
              className="input"
              type="text"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            />
          </label>

          <label className="label">
            PIN:
            <input
              className="input"
              type="text"
              value={formData.pin}
              onChange={(e) => setFormData({ ...formData, pin: e.target.value })}
            />
          </label>

          <label className="label">
            State:
            <input
              className="input"
              type="text"
              value={formData.state}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
            />
          </label>

          {/* Dropdown for Company Name */}
          <label className="label">
            Company Name:
            <select
              className="input"
              onChange={(e) => {
                setFormData({ ...formData, company: e.target.value });
                fetchVehicleModels(e.target.value);
              }}
            >
              <option value="">Select Company</option>
              {companyList.map((company) => (
                <option key={company._id} value={company.Compn}>
                  {company.Compn}
                </option>
              ))}
            </select>
          </label>

          {/* Dropdown for Vehicle Model */}
          <label className="label">
            Vehicle Model:
            <select
              className="input"
              value={formData.vehicleModel}
              onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
            >
              <option value="">Select Vehicle Model</option>
              {venameList.map((vename) => (
                <option key={vename._id} value={vename.Vename}>
                  {vename.Vename}
                </option>
              ))}
            </select>
          </label>

          {/* Dropdown for Sub Model */}
          <label className="label">
            Sub Model:
            <select
              className="input"
              value={formData.subModel}
              onChange={(e) => setFormData({ ...formData, subModel: e.target.value })}
            >
              <option value="">Select Sub Model</option>
              {subModelList.map((subModel) => (
                <option key={subModel} value={subModel}>
                  {subModel}
                </option>
              ))}
            </select>
          </label>

          <button className="booking-button" type="submit">
            <b>Submit</b>
          </button>
          <br />
          <button>
            <Link to="/" className="booking-link">
              <b> Back</b>
            </Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default Booking;
