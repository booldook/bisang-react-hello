const { useState, useRef, useEffect, useCallback, useMemo } = React;

const Title = () => {
  const style = {
    height: '40px',
    marginTop: '15px'
  }
  return (
    <h1 style={style}>타이틀</h1>
  )
}

const CloseButton = () => {
  const style = {
    right: '12px', 
    top: '12px', 
    cursor: 'pointer'
  }
  return (
    <span className="fa fa-times-circle position-absolute" style={style} ></span>
  )
}

const Input = () => {
  return (
    <form className="position-relative">
      <input type="text" className="form-control" autoFocus onChange/>
      <CloseButton />
    </form>
  )
}

const List = () => {
  return (
    <div>리스트</div>
  )
}

const App = () => {
  return (
    <div className="container">
      <Title />
      <Input />
      <List />
      <button className="btn btn-primary my-3">리스트 삭제</button>
    </div>
  )
}


ReactDOM.render(<App/>, document.querySelector('#app'));