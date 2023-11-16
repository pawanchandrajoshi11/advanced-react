import { useState } from "react";
import { data } from "../../../data";

const userChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    //if name column is empty and the user tried to submit the form
    if (!name) return;

    const fakeID = Date.now();
    const newUser = { id: fakeID, name };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    console.log("New person added!");
    setName("");
  };

  const removeUser = (id) => {
    const updatedUsers = users.filter((person) => person.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button className="btn btn-block" type="submit">
          Submit
        </button>
      </form>

      {/* render users below */}
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h5
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {user.name}{" "}
              <span>
                <button
                  style={{ fontSize: "10px" }}
                  className="btn"
                  onClick={() => removeUser(user.id)}
                >
                  Remove
                </button>
              </span>
            </h5>
          </div>
        );
      })}
    </div>
  );
};
export default userChallenge;
