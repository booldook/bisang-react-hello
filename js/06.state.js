class App extends React.Component {
  state = {
    size: 600,
    src: 'https://placeimg.com/600/600/any'
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
      <div className="container text-center">
        <img src={this.state.src}/>
        <div>
          <button className="btn btn-primary" onClick={this.onClick}>바꿔</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>, document.querySelector('#app'));