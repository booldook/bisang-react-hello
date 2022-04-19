/* 
1. 부모와 자식간의 값 전달
2. 부모가 자식에게 값을 전달할때는 props(속성)으로 전달
3. 자식이 부모에게 값을 전달할때는 props로 전달받은 event를 실행하여 전달
*/


const { Component, createRef } = React;

class Title extends Component {
  render() {
    return (
      <div>타이틀</div>
    )
  }
}

class CloseButton extends Component {
  style = {
    right: '12px', 
    top: '12px', 
    cursor: 'pointer'
  }
  onDelete = () => {
    this.props.onDelete(); // 부모의 이벤트
  }
  render() {
    return (
      <span className="fa fa-times-circle position-absolute" style={this.style} onClick={this.onDelete} ></span>
    )
  }
}

class Input extends Component {
  state = {
    text: '',
  }
  inputRef = createRef(); // ref로 DOM을 init
  onChange = (e) => {
    this.setState({
      ...this.state,
      text: e.target.value
    })
    this.props.getValue(this.state.text);
  }
  onDelete = () => {
    this.setState({
      ...this.state,
      text: ''
    })
    this.inputRef.current.value = '';
    this.inputRef.current.focus();
  }
  render() {
    return (
      <form className="position-relative">
        <input type="text" className="form-control" onChange={this.onChange} ref={this.inputRef} autoFocus />
        { this.state.text.length ? <CloseButton onDelete={this.onDelete} /> : '' }
      </form>
    )
  }
}

class List extends Component {
  render() {
    return (
      <div>리스트</div>
    )
  }
}

class App extends Component {
  state = {
    text: '',
  }
  onInput = (value) => {
    this.setState({
      ...this.state,
      text: value
    })
  }
  render() {
    return (
      <div className="container">
        <Title />
        <Input getValue={this.onInput} />
        <List />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));
