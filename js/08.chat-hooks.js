const { useState, useRef, useEffect, useCallback, useMemo } = React;

const Title = ({ txt }) => {
  const style = {
    height: '40px',
    marginTop: '15px'
  }
  return (
    <h1 style={style}>{txt}</h1>
  )
}

const CloseButton = ({ onDelete }) => {
  const style = {
    right: '12px', 
    top: '12px', 
    cursor: 'pointer'
  }
  return (
    <span className="fa fa-times-circle position-absolute" style={style} onClick={onDelete}></span>
  )
}

const Input = ({ onInput, onInputSubmit }) => {
  const inputRef = useRef();
  const onChange = (e) => {
    onInput(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault();
    onInputSubmit(inputRef.current.value);
    onDelete();
  }
  const onDelete = () => {
    onInput('');
    inputRef.current.value = '';
    inputRef.current.focus();
  }
  return (
    <form className="position-relative" onSubmit={onSubmit}>
      <input type="text" className="form-control" autoFocus onChange={onChange} ref={inputRef}/>
      <CloseButton onDelete={onDelete}/>
    </form>
  )
}

const List = ({ data }) => {
  return (
    <div>{ data }</div>
  )
}

const App = () => {
  const [txt, setTxt] = useState('');
  const [lists, setLists] = useState([]);

  const onInput = (value) => {
    setTxt(value);
  }

  const onInputSubmit = (value) => {
    setLists([...lists, value])
  }

  const onReset = () => {
    setTxt(''); 
    setLists([]);
  }

  return (
    <div className="container">
      <Title txt={txt}/>
      <Input onInput={onInput} onInputSubmit={onInputSubmit} />
      { lists.map((list, index) => (<List data={list} key={`list${index}`} />)) }
      <button className="btn btn-primary my-3" onClick={onReset}>리스트 삭제</button>
    </div>
  )
}


ReactDOM.render(<App/>, document.querySelector('#app'));