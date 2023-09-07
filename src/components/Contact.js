import React, { useState } from 'react';
import AvatarImg from '../assets/avatar.png';
import UploadImg from '../assets/upload.png';
import EnvelopeImg from '../assets/envelope.png';
import PhoneImg from '../assets/phone.png';
import LinkedInImg from '../assets/linkedin.png';
import '../styles/Contact.css';

const Contact = () => {
  const [image, setImage] = useState(null);
  const [email, setEmail] = useState('shubhankar7765@gmail.com');
  const [phone, setPhone] = useState('+91 95xxxxxxx1');
  const [linkedIn, setLinkedIn] = useState('shubhankar');
  const [editMode, setEditMode] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const toggleEditMode = () => {
    setEditMode((prevEditMode) => !prevEditMode);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const setters = {
      email: setEmail,
      phone: setPhone,
      linkedIn: setLinkedIn,
    };

    setters[name](value);
  };

  const imageUrl = image ? URL.createObjectURL(image) : AvatarImg;

  const editBtn = (
    <button className="Contact__editBtn" onClick={toggleEditMode}>
      Edit
    </button>
  );

  const form = (
    <form>
      <h2>Contact Info</h2>
      <label htmlFor="email">E-Mail</label>
      <input
        name="email"
        id="email"
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={handleChange}
      />
      <label htmlFor="phone">Phone</label>
      <input
        name="phone"
        id="phone"
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={handleChange}
      />
      <label htmlFor="linkedIn">LinkedIn</label>
      <input
        name="linkedIn"
        id="linkedIn"
        type="text"
        placeholder="LinkedIn"
        value={linkedIn}
        onChange={handleChange}
      />
      <button onClick={toggleEditMode}>Close</button>
    </form>
  );

  return (
    <div className="Contact">
      <div className="Contact__photoContainer">
        <img className="Contact__photo" src={imageUrl} alt="Person" />
        <label className="Contact__photoUpload" htmlFor="image-upload-button">
          <input
            id="image-upload-button"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
          
          <img src={UploadImg} alt="Upload photo" />
        </label>
      </div>
      <div className="Contact__info">
        {email && (
          <div className="Contact__entry">
            <img src={EnvelopeImg} alt="" />
            <p>{email}</p>
          </div>
        )}
        {phone && (
          <div className="Contact__entry">
            <img src={PhoneImg} alt="" />
            <p>{phone}</p>
          </div>
        )}
        {linkedIn && (
          <div className="Contact__entry">
            <img src={LinkedInImg} alt="" />
            <p>www.linkedin.com/in/{linkedIn}</p>
          </div>
        )}
        {!editMode && editBtn}
      </div>
      {editMode && <div className="CV__overlay">{form}</div>}
    </div>
  );
};

export default Contact;
