import React from "react";

const Card = ({name, email, id}) => {
  
  return (
    <div className="tc bg-red dib br3 pa3 ma2 grow bw3 shadow-5">
      <img src={`https://robohash.org/${id}?100x100`} alt="XXXXXX" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
