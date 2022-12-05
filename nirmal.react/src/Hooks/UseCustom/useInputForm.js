import { useState } from "react";

function useInputForm(initialValue) {
  const [Value, setValue] = useState(initialValue);

  const bind = {
    Value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };

  const reset = () => {
    setValue(initialValue);
  };

  return [Value, bind, reset];
}

export default useInputForm;
