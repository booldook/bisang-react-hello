/* 
1. 부모와 자식간의 값 전달
2. 부모가 자식에게 값을 전달할때는 props(속성)으로 전달
3. 자식이 부모에게 값을 전달할때는 props로 전달받은 event를 실행하여 전달
*/


const { Component, createRef } = React;

class Title extends Component {
  style = {
    height: '40px',
    marginTop: '15px'
  }
  render() {
    return (
      <h1 style={this.style}>{ this.props.txt }</h1>
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
    txt: '',
  }
  inputRef = createRef(); // ref로 DOM을 init
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmitForm(this.state.txt);
    this.onReset();
  }
  onChange = (e) => {
    this.setState({
      ...this.state,
      txt: e.target.value
    })
    this.props.onInput(this.inputRef.current.value);
  }
  onDelete = () => {
    this.setState({
      ...this.state,
      txt: ''
    })
    this.props.onInput('');
    this.onReset();
  }
  onReset = () => {
    this.inputRef.current.value = '';
    this.inputRef.current.focus();
  }
  render() {
    return (
      <form className="position-relative" onSubmit={this.onSubmit}>
        <input type="text" className="form-control" onChange={this.onChange} ref={this.inputRef} autoFocus />
        { this.state.txt.length ? <CloseButton onDelete={this.onDelete} /> : '' }
      </form>
    )
  }
}

class List extends Component {
  render() {
    return (
      <div>{this.props.list}</div>
    )
  }
}

class App extends Component {
  state = {
    txt: '',
    lists: [],
  }
  onInput = (value) => {
    this.setState({
      ...this.state,
      txt: value
    })
  }
  onSubmitForm = (value) => {
    this.setState({
      txt: '',
      lists: [...this.state.lists, value]
    });
  }
  onClick = () => {
    this.setState({
      txt: '',
      lists: [],
    })
  }
  render() {
    return (
      <div className="container">
        <Title txt={this.state.txt} />
        <Input onInput={this.onInput} onSubmitForm={this.onSubmitForm} />
        {this.state.lists.map((list, index) => (<List key={`list+${index}`} list={list}/>))}
        <button className="btn btn-primary my-3" onClick={this.onClick}>리스트 삭제</button>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector('#app'));
