import { useState } from 'react';

const UseStateObject = () => {
  // const [name, setName] = useState("Peter");
  // const [age, setAge] = useState(24);
  // const [hobby, setHobby] = useState("reading Books");

  const [person, setPerson] = useState({
    name: "John",
    age: 25,
    hobby: "Playing Basketball"
  });

  const displayPerson = () => {
    // setName("John");
    // setAge(25);
    // setHobby("Playing Cricket");


    setPerson({ ...person, name: "Jason" }); //first make a copy and then add a perticular single updated field

    //or use this method
    // setPerson({ name: "Simon", age: 27, hobby: "Dancing" });
  }

  const { name, age, hobby } = person;  //Array destructuring
  return <div>
    <h4>Name: {name}</h4>
    <h4>Age: {age}</h4>
    <h4>Hobby: {hobby}</h4>
    <button type='button' className='btn' onClick={displayPerson}>Show John</button>
  </div>;
};

export default UseStateObject;
