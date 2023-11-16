import { useState } from "react";

const controlledInput = () => {
  const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // do something
        console.log(name, email);
    }

  //   const handleChange = (e) => {
  //     // console.log(e.target.name);
  //       // console.log(e.target.value);
  //       setName(e.target.value);
  //   };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>controlled input</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          id="name"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button className="btn btn-block" type="submit">
        Submit
      </button>
    </form>
  );
};
export default controlledInput;
