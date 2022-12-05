import React, { createContext, useState } from "react";

export const HadleOnChange = createContext();
export const HadleOnSubmit = createContext();

function Context({ children }) {
  const [contact, setContact] = useState();

  const [addFormData, setAddFromData] = useState({
    id: "",
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  return (
    <HadleOnSubmit.Provider value={{ contact, setContact }}>
      <HadleOnChange.Provider value={{ addFormData, setAddFromData }}>
        {children}
      </HadleOnChange.Provider>
    </HadleOnSubmit.Provider>
  );
}

export default Context;
