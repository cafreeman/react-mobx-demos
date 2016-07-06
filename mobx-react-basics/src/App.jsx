import React from 'react';
import { observer } from 'mobx-react';

import Layout from './components/Layout';
import TeamList from './components/TeamList';
import Input from './components/Input';

@observer
class App extends React.Component {
  constructor(props) {
    super(props);
    this.store = props.store;
  }

  render() {
    return (
      <Layout>
        <Input store={this.store} />
        <TeamList people={this.store.people} />
      </Layout>
    );
  }
}

export default App;
