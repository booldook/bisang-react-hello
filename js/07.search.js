const url = 'https://jsonplaceholder.typicode.com/users/';
class App extends React.Component {
  state = {
    idx: 1,
    users: [],
  }
  getData = async (_idx) => {
     const { data } = await axios.get(url + _idx);
     return data;
  }
  getUser = async () => {
    const idx = this.state.idx + 1;
    const user = await this.getData(idx);
    const users = [...this.state.users, user];
    this.setState({ idx, users })
  }
  /* 
  componentDidMount() // 최초 한번
  componentDidUpdate() // render() 실행될떄마다
  componentWillUnmount() // Component 가 화면에서 퇴장할때
  */
 ComponentWillUnmount() {
   console.log('Unmount')
 }
 componentDidUpdate() {
   if(this.state.a) {

   }
   console.log('update');
 }
  async componentDidMount() { // 최초 Component가 생성될때 한번 실행된다.
    console.log('mount')
    const user = await this.getData(this.state.idx);
    // console.log(data);
    this.setState({
      users: [user],
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