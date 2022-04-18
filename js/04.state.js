const users = [{
    name: '홍길동',
    age: 35
  },
  {
    name: '홍길만',
    age: 45
  },
  {
    name: '홍길순',
    age: 25
  },
];

class List extends React.Component{
  render() {
    const name = this.props.name;
    const age = this.props.age;
    return (
      <li>{name} | {age}</li>
    )
  }
}

class Lists extends React.Component {
  render() {
    return (
      <ul>
        { users.map((user) => (<List name={user.name} age={user.age}  />)) }
      </ul>
    )
  }
}

ReactDOM.render(<Lists />, document.querySelector('#app'));