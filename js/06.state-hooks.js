const { useState } = React;

const App = () => {
  const [size,  setSize] = useState(600);
  const [src, setSrc] = useState('https://placeimg.com/600/600/any');
  const onClick = (e) => {
    setSize(size - 50);
    setSrc('https://placeimg.com/'+size+'/'+size+'/any');
  }

  return (
    <div className="container text-center">
      <img src={src}/>
      <div>
        <button className="btn btn-primary" onClick={onClick}>바꿔</button>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App/>, document.querySelector('#app'));