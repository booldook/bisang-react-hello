const { useState, useEffect } = React;

const url = 'https://jsonplaceholder.typicode.com/users/';
const App = () => {
  const [idx, setIdx] = useState(1);
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    const { data } = await axios.get(url + idx);
    setIdx(idx + 1);
    setUsers([...users, data]);
  }

  useEffect(getUser, [])

  /* useEffect(async () => { // componentDidMount
    const user = await getData(idx);
    setIdx(idx + 1);
    setUsers([...users, user]);

    //return () => { // componentWillUnmount}
  }, [])// componentDidUpdate) */

  return (
    <div className="container">
      <h1>Users</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
            <th>tel</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, i) => (
              <tr key={i}>
                <th>{ user.id }</th>
                <th>{ user.name }</th>
                <th>{ user.username }</th>
                <th>{ user.email }</th>
                <th>{ user.phone }</th>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className="my-3 text-center">
        <button className="btn btn-primary" onClick={getUser}>회원 가져오기</button>
      </div>
    </div>
  )
}



ReactDOM.render(<App/>, document.querySelector('#app'));