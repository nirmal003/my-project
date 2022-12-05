import React from "react";

function Objectmap() {
  const persons = [
    {
      id: 1,
      name: "Nirmal",
      age: 26,
      skill: "React",
    },
    {
      id: 2,
      name: "Mahesh",
      age: 22,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Arun",
      age: 26,
      skill: "Vue",
    },
    {
      id: 4,
      name: "Surya",
      age: 23,
      skill: "React",
    },
  ];

  const personData = persons.map((person) => (
    <h1 key={person.id}>
      I'm {person.name} and {person.age} year's old. I know {person.skill}.
    </h1>
  ));

  return <div>{personData}</div>;
}

export default Objectmap;
