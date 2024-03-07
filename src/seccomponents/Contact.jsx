import React from 'react';
import Navbar from '../components/Navbar';
import bacck from '../assets/baack.png';

const InputField = ({ label, type, placeholder }) => (
  <div>
    <label className="text-sm font-semibold block mb-2">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-md py-2.5 px-4 border text-sm outline-blue-500"
    />
  </div>
);

const TextArea = ({ label, placeholder, rows }) => (
  <div>
    <label className="text-sm font-semibold block mb-2">{label}</label>
    <textarea
      placeholder={placeholder}
      rows={rows}
      className="w-full rounded-md px-4 border text-sm pt-2.5 outline-blue-500"
    ></textarea>
  </div>
);

const Contact = () => {
  const containerStyle = {
    backgroundImage: `url(${bacck})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
  };

  return (
    <>
      <Navbar />
      <div style={containerStyle}>
        <div className="my-6 mx-auto w-[500px] bg-white font-[sans-serif] p-8 rounded-md">
          <h1 className="text-3xl text-[#333] font-extrabold text-center">Contact</h1>
          <form className="mt-8 space-y-6">
            <InputField label="Your Name" type="text" placeholder="Name" />
            <InputField label="Your Email" type="email" placeholder="Email" />
            <InputField label="Subject" type="text" placeholder="Subject" />
            <TextArea label="Message" placeholder="Message" rows="8" />
            <button
              type="button"
              className="text-white bg-blue-500 hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-3 w-full"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
