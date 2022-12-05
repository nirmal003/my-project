import React, { useState, useCallback } from "react";
import Title from "./Title";
import Counter from "./Counter";
import Button from "./Button";

function ParentCall() {
  const [Age, setAge] = useState(25);
  const [Salary, setSalary] = useState(50000);

  const IncreaseAge = useCallback(() => {
    setAge(Age + 1);
  }, [Age]);

  const IncreaseSalary = useCallback(() => {
    setSalary(Salary + 1000);
  }, [Salary]);

  return (
    <div>
      <Title />
      <Counter text="Age" Count={Age} />
      <Button Click={IncreaseAge}>Increase Age</Button>
      <Counter text="Salary" Count={Salary} />
      <Button Click={IncreaseSalary}>Increase Salary</Button>
    </div>
  );
}

export default ParentCall;
