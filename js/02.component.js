// Component : 재사용 가능한 코드 조각(HTML, CSS, JS)
class Booldook extends React.Component {
  render() {
    return <span>Booldook</span>
  }
}

class Hello extends React.Component {
  render() {
    // 코드를 작성
    const str = 'Hello ';

    //return JSX
    return (
      <h1>
        { str }
        <Booldook />
      </h1>
    )
  }
}


ReactDOM.render(<Hello />, document.querySelector('#app'));