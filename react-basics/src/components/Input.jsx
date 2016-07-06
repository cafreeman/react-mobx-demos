import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    };
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  }

  render() {
    return (
      <div className="input-group">
        <input
          className="form-control"
          type="text"
          value={this.state.inputValue}
          onChange={(e) => this.handleChange(e)}
        />
        <span className="input-group-btn">
          <button
            type="button"
            className="btn btn-primary"
            onClick={(e) => this.handleSubmit(e)}
          >
            <strong>+</strong>
          </button>
        </span>
      </div>
    );
  }
}

export default Input;
