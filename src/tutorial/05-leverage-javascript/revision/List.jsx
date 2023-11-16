import { people } from "../../../data";
import Person from "./Person";

const List = () => {
  return (
    <div>
      <h1>data name</h1>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
};
export default List;
