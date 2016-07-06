import React from 'react';

import Layout from './components/Layout';
import TeamList from './components/TeamList';
import Input from './components/Input';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: props.inputs,
    };
  }

  addPerson(newPerson) {
    this.setState({
      people: this.state.people.concat(newPerson),
    });
  }

  render() {
    return (
      <Layout>
        <Input onSubmit={(p) => this.addPerson(p)} />
        <TeamList people={this.state.people} />
      </Layout>
    );
  }
}

export default App;
