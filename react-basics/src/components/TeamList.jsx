import React from 'react';

const Hello = ({name}) => <h2>Hello {name}!</h2>;

function TeamList({ people }) {
  return (
    <div>
      {
        people.map(person => <Hello name={person} />)
      }
    </div>
  );
}

export default TeamList;
