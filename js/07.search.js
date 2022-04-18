const url = 'https://jsonplaceholder.typicode.com/users/';
class App extends React.Component {
  state = {
    idx: 1,
    users: [],
  }
  getUser = () => {

  }
  async componentDidMount() {
    const { data } = await axios.get(url + this.state.idx);
    // console.log(data);
    this.setState({
      users: [data],
    });
  }
  render() {
    console.log('render')
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
              this.state.users.map((user, i) => (
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
          <button className="btn btn-primary" onClick={this.getUser}>회원 가져오기</button>
        </div>
      </div>
    )
  }
}


ReactDOM.render(<App/>, document.querySelector('#app'));