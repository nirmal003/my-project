import React from "react";

function EditableRow({
  editFormData,
  handleEditOnChange,
  handleCancelClick,
  editContactId,
}) {
  return (
    <tr>
      <td>{editContactId}</td>
      <td>
        <input
          className="editrow"
          type="text"
          name="fullName"
          placeholder="Enter your Name..."
          required="required"
          value={editFormData.fullName}
          onChange={handleEditOnChange}
        />
      </td>
      <td>
        <input
          className="editrow"
          type="text"
          name="address"
          placeholder="Enter your address..."
          required="required"
          value={editFormData.address}
          onChange={handleEditOnChange}
        />
      </td>
      <td>
        <input
          className="editrow"
          type="number"
          name="phoneNumber"
          placeholder="Enter your phoneNumber..."
          required="required"
          value={editFormData.phoneNumber}
          onChange={handleEditOnChange}
        />
      </td>
      <td>
        <input
          className="editrow"
          type="email"
          name="email"
          placeholder="Enter your email..."
          required="required"
          value={editFormData.email}
          onChange={handleEditOnChange}
        />
      </td>
      <td>
        <button type="submit">Save</button>

        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
}

export default EditableRow;
