import { useEffect, useState } from "react";

const multipleInputs = () => {
  const [user, setUser] = useState(() => {
    const prevUserData = localStorage.getItem("userData");
    return prevUserData
      ? JSON.parse(prevUserData)
      : {
          name: "",
          email: "",
          password: "",
        };
  });

  const handleInputs = (e) => {
    setUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    const prevUserData = localStorage.getItem("userData");

    if (prevUserData) {
      const parsedUserData = JSON.parse(prevUserData);
      console.log("Previous User Data: ", parsedUserData);
    }
  }, []);

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Multiple Inputs</h4>
        <div className="form-row">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" onChange={handleInputs} />
        </div>
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={handleInputs} />
        </div>
        <div className="form-row">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleInputs}
          />
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </div>
  );
};
export default multipleInputs;
