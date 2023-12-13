import React from 'react';

const Header = ({ pageTitle }) => {
  return (
    <header className="text-center py-2" style={{backgroundColor: "#ff7800", color: "black"}}>
      <h1>{pageTitle}</h1>
    </header>
  );
}

export default Header;
