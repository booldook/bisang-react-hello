// Component : 재사용 가능한 코드 조각(HTML, CSS, JS)

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

class Lists extends React.Component {
  render() {
    return (
      <ul>
        {
          users.map(user => (
            <li>{ user.name } | { user.age }</li>
          ))
        }
      </ul>
    )
  }
}



ReactDOM.render( < Lists / > , document.querySelector('#app'));