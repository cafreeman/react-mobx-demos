import React from 'react';
import { observer } from 'mobx-react';

function Input({ store }) {
  return (
  <div className="input-group">
    <input
      className="form-control"
      type="text"
      value={store.inputValue}
      onChange={(e) => store.updateInputValue(e.target.value)}
    />
    <span className="input-group-btn">
      <button
        type="button"
        disabled={store.isInputEmpty}
        className="btn btn-primary"
        onClick={store.addPerson}
      >
        <strong>+</strong>
      </button>
    </span>
  </div>
);
}

export default observer(Input);
