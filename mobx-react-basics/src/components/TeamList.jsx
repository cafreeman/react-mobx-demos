import React from 'react';
import { observer } from 'mobx-react';

const Hello = ({ name }) => <h2>Hello {name}!</h2>;

function TeamList({ people }) {
  return (
    <div>
      {
        people.map((person, idx) => <Hello key={idx} name={person} />)
      }
    </div>
  );
}

export default observer(TeamList);
