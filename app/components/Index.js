import React from 'react';
import {connect} from 'react-redux';
import App from './App';
import Operation from './Operation';
import {add} from '../actions/operations';

@connect(mapStateToProps)
class Main extends React.Component {

  prueba () {
    this.props.dispatch(add(1));
  }

  render() {
    return (
      <section>
        <Operation name="Operaciones" operations={this.props.operations} dispatch={this.props.dispatch}/>
        <App name="Usuarios" users={this.props.users} dispatch={this.props.dispatch}/>
      </section>
    )
  }
}

function mapStateToProps(store) {
  return {
    users: store.users,
    tweets: store.tweets,
    operations: store.operations
  }
}

export default Main;
