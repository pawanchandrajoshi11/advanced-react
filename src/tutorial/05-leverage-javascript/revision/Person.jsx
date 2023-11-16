import avatar from "../../../assets/default-avatar.svg";

const Person = ({ name, nickName = "ShakeAndBake", images }) => {
  // const img = images && images[0] && images[0].small && images[0].small.url;
  const img = images?.[0]?.small?.url ?? avatar;        //shorter one

  return (
    <div>
      <h4>{name}</h4>
      <h5 style={{ opacity: 0.5, fontSize: "15px" }}>
        {/* {nickName ? `Nickname: ${nickName}` : ""} */}
        Nickname: {nickName}
      </h5>
      <img src={img} alt={name} style={{ width: "50px" }} />
    </div>
  );
};
export default Person;
