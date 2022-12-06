import axios from "axios";
import { nanoid } from "nanoid";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HadleOnChange, HadleOnSubmit } from "./Components/Context";
import EditableRow from "./Components/EditableRow";
import ModelUpdate from "./Components/ModelUpdate";
import ReadOnlyRow from "./Components/ReadOnlyRow";

function Crud() {
  const Navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const { contact, setContact } = useContext(HadleOnSubmit);

  const { addFormData, setAddFromData } = useContext(HadleOnChange);

  // const [contact, setContact] = useState();

  // const [addFormData, setAddFromData] = useState({
  //   id: "",
  //   fullName: "",
  //   address: "",
  //   phoneNumber: "",
  //   email: "",
  // });

  const [editContactId, setEditContactId] = useState(null);

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  useEffect(() => {
    //        will Read

    fetch("http://localhost:3000/contacts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        data.sort((a, b) => b.id - a.id);

        setContact(data);
      })
      .catch((err) => {
        console.log("Sorry can't fetch the data", err);
      });
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

  const handleEditOnChange = (e) => {
    e.preventDefault();

    const key = e.target.getAttribute("name");
    const value = e.target.value;

    const newData = { ...editFormData };
    newData[key] = value;

    setEditFormData(newData);
  };

  const handleAddOnSubmit = async (e) => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contact, newContact];

    setContact(newContacts);

    window.location.reload();

    //         will create

    await axios.post(`http://localhost:3000/contacts`, addFormData).then(() => {
      console.log("Successfully Updated");
    });

    // setOpen(false);
  };

  const handleEditClick = (e, contact) => {
    e.preventDefault();

    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };

    setEditFormData(formValues);

    console.log("im try to edit", formValues);
  };

  const handleEditOnSubmit = async (e) => {
    e.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newEditContacts = [...contact];

    const index = contact.findIndex((contact) => contact.id === editContactId);

    newEditContacts[index] = editedContact;

    setContact(newEditContacts);

    setEditContactId(null);

    //           will edit and update

    await axios
      .put(`http://localhost:3000/contacts/${editContactId}`, editedContact)
      .then((res) => {
        // window.location.reload();

        console.log(res);

        console.log("Successfully Edited/Readed");
      })
      .catch((err) => {
        console.log("Sorry! can,t save it");
      });
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = async (contactId) => {
    const newContacts = [...contact];

    const index = contact.findIndex((contact) => contact.id === contactId);

    //           will Delete

    if (
      window.confirm(`Do you want to delete this contact id ${contactId} ?`)
    ) {
      await axios
        .delete(`http://localhost:3000/contacts/${contactId}`)
        .then(() => {
          console.log("Successfully deleted");

          newContacts.splice(index, 1);
        })
        .catch(() => {
          console.log("Sorry! i can't delete this");
        });
    } else {
      console.log("Successfully Canceled");
    }

    setContact(newContacts);

    console.log(contactId);
  };

  return (
    <div>
      <h2>Created Contact details</h2>

      <div className="container">
        <button className="new-btn" onClick={() => Navigate("/update")}>
          Add New Contact
        </button>
        <button className="new-btn" onClick={() => setOpen(true)}>
          Portal Add New Contact
        </button>
      </div>

      <form onSubmit={handleEditOnSubmit}>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contact &&
              contact.map((data) => (
                <>
                  {editContactId === data.id ? (
                    <EditableRow
                      key={data.id}
                      editContactId={editContactId}
                      editFormData={editFormData}
                      handleEditOnChange={handleEditOnChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyRow
                      key={data.id}
                      data={data}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </>
              ))}
          </tbody>
        </table>
      </form>

      <ModelUpdate open={open} close={() => setOpen(false)}>
        <h2 className="header">Add a new Contact</h2>

        <form onSubmit={handleAddOnSubmit}>
          <input
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
          <button type="submit" className="btn">
            Add
          </button>
        </form>
      </ModelUpdate>
    </div>
  );
}

export default Crud;
