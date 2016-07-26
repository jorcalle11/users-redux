import React from 'react';
import uid from 'uid';
import * as users from '../actions/users';
import User from './User';

class App extends React.Component {
  constructor(){
    super();
    this.addUser = this.addUser.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleName = this.handleName.bind(this);
    this.state = {name: 'Nicole Calle', age:2, id: uid(10)};
  }

  componentWillMount() {
    this.props.dispatch(users.fetch_users())
  }

  addUser(e) {
    e.preventDefault();
    this.props.dispatch(users.addUser(this.state));
  }

  plus(e) {
    e.preventDefault();
    this.props.dispatch({type: 'PLUS',payload:this.state.age});
  }

  handleAge(e) {
    this.setState({age: Number(e.target.value.trim())});
  }

  handleName(e) {
    this.setState({name: e.target.value, id:uid(10)});
  }

  render() {
    const {users, operations} = this.props;
    if (!users.length) {
      return (<h1 className="center">Cargando datos, espere...</h1>)
    }

    let style = {
      width: '70%',
      textAlign: 'center',
      border: '2px solid blue',
      margin: '10px auto 0 auto'
    }

    return (
      <section style={style}>
        <h1>Lista de Usuarios</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Nombre: </label>
            <input type="text" name="name" value={this.state.name} onChange={this.handleName}/>
          </div>
          <div className="form-group">
            <label htmlFor="age">Edad: </label>
            <input type="number" name="age" value={this.state.age} onChange={this.handleAge}/>
          </div>
        </form>
        <button className="btn" onClick={this.addUser}>Agregar Usuario</button>
        <button className="btn" onClick={this.plus.bind(this)}>+</button>
        <ul className="list-users">
          {
            users.map((user,index) => {
              return (
                <User key={index} user={user} dispatch={this.props.dispatch}/>
              )
            })
          }
        </ul>
      </section>
    )
  }
}

export default App;
