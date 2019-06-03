import React from "react";

const SearchBox = ({searchfield, searchChange}) => {
  return (
    <div >
      <input className="pa4 ba b--cyan bg-grey" type="search" placeholder="Ingrese el nombre" onChange={searchChange}/>
    </div>
  );
};

export default SearchBox;
