import React, { useEffect, useRef } from "react";
import useInputForm from "./useInputForm";

function InputForm() {
  const [FirstName, bindFirstName, resetFirstName] = useInputForm("");
  const [LirstName, bindLirstName, resetLirstName] = useInputForm("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const submitHandler = (e) => {
    // e.preventDefault();

    alert(`hello ${FirstName} ${LirstName} how are you?`);
    resetFirstName();
    resetLirstName();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>FirstName</label>
          <input ref={inputRef} type="text" {...bindFirstName} />
        </div>
        <div>
          <label>LirstName</label>
          <input type="text" {...bindLirstName} />
        </div>
        <button>Reset</button>
      </form>
    </div>
  );
}

export default InputForm;
