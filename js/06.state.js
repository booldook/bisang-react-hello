class App extends React.Component {
  state = {
    size: 500,
    src: 'https://placeimg.com/600/600/any'
  }
  onChange = (e) => {
    this.size = e.target.value;
  }
  onClick = (e) => {
    const size = this.state.size - 50
    this.setState({
      size,
      src: 'https://placeimg.com/' + size + '/' + size + '/any'
    })
  }
  render() {
    return (
      <div className="container">
        <div></div>
        <img src={this.state.src}/>
        <div>
          {/* <input type="text" onChange={onChange} />           */}
          <button className="btn btn-primary" onClick={this.onClick}>바꿔</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>, document.querySelector('#app'));