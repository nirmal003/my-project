import React from "react";

function ReadOnlyRow({ data, handleEditClick, handleDeleteClick }) {
  return (
    <>
      <tr key={data.id}>
        <td>{data.id}</td>
        <td>{data.fullName}</td>
        <td>{data.address}</td>
        <td>{data.phoneNumber}</td>
        <td>{data.email}</td>
        <td>
          <button type="button" onClick={(e) => handleEditClick(e, data)}>
            Edit
          </button>
          <button type="button" onClick={(e) => handleDeleteClick(data.id)}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default ReadOnlyRow;
