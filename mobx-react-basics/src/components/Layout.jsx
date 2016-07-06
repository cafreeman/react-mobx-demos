import React from 'react';

function Layout(props) {
  return (
    <div className="container">
      <div className="col-md-8 col-md-offset-2">
        <h1>List of team members:</h1>
        {props.children}
      </div>
    </div>
  );
}

export default Layout;
