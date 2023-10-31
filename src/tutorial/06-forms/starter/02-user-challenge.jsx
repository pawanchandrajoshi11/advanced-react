import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;

    const fakeId = Date.now();
    const newUser = { id: fakeId, name };
    //updating the users' list 
    const updatedUsers = [...users, newUser]; 
    setUsers(updatedUsers);

    //clearing out the font input console
    setName('');
  };

  const removeUser = (id) => {
    const updatedUsers = users.filter((person) => {
      return person.id !== id;
    })
    setUsers(updatedUsers);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>

        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>

      {/* render users below */}

      <h4>Users</h4>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h6 >{user.name} </h6>
            <button className="btn" onClick={()=>removeUser(user.id)}>remove</button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
