import axios from "axios";
import { nanoid } from "nanoid";
import React, { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { HadleOnChange, HadleOnSubmit } from "./Context";

function Update() {
  const { contact, setContact } = useContext(HadleOnSubmit);
  const { addFormData, setAddFromData } = useContext(HadleOnChange);

  const Navigate = useNavigate();

  const inputRef = useRef(null);

  useEffect(() => {
    //   without function call useRef will not execute

    inputRef.current.focus();
  }, []);

  const handleAddOnChange = (e) => {
    e.preventDefault();

    const key = e.target.getAttribute("name");
    const value = e.target.value;

    const newData = { ...addFormData };
    newData[key] = value;

    setAddFromData(newData);

    // console.log(newData);
  };

  const handleAddOnSubmit = async (e) => {
    e.preventDefault();

    // console.log("hey im there");

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contact, newContact];

    setContact(newContacts);

    window.location.href = "/"; //    it will reload always

    //         will Update

    await axios
      .post(`http://localhost:3000/contacts`, addFormData)
      .then(() => {
        // window.location.reload();

        console.log("Successfully Updated");
      })
      .catch((err) => {
        console.log(err);
      });

    // Navigate("/"); //       it will not reload
  };

  return (
    <div>
      <h2>Add a new Contact</h2>

      <form onSubmit={handleAddOnSubmit}>
        <input
          ref={inputRef}
          type="text"
          name="fullName"
          placeholder="Enter your Name..."
          required="required"
          onChange={handleAddOnChange}
        />
        <br />
        <br />
        <input
          type="text"
          name="address"
          placeholder="Enter your address..."
          required="required"
          onChange={handleAddOnChange}
        />
        <br />
        <br />
        <input
          type="number"
          name="phoneNumber"
          placeholder="Enter your phoneNumber..."
          required="required"
          onChange={handleAddOnChange}
        />
        <br />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter your email..."
          required="required"
          onChange={handleAddOnChange}
        />
        <br />
        <br />
        <button type="submit">Add</button>
      </form>
      <div className="btn-container">
        <button className="new-btn" onClick={() => Navigate("/")}>
          Go back
        </button>
      </div>
    </div>
  );
}

export default Update;
