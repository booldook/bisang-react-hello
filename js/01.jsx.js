/* createElement */
// React.createElement('태그명', {속성}, 'value');
// React.createElement('div', { title: 'ABC', className: 'wrap' }, '가나다라');
const el = React.createElement(
  'h1', {
    className: 'wrap',
    title: 'TITLE'
  },
  '가나다라'
);

const title = 'Title';
const username = 'booldook';

// JSX
const el2 = (
  <h1 className="wrap" title={ title }>
    { username }
  </h1>
);

// Iteration
const app = document.querySelector('#app');
const containerClass = 'wrapper';
const users = [
  { name: '홍길동', age: 35 },
  { name: '홍길만', age: 45 },
  { name: '홍길순', age: 25 },
]

const el3 = (
  <ul className={containerClass} title="Title">
    { users.map(user => (
      <li>
        { user.name }
        <span>{ user.age }</span>
      </li>
    )) }
  </ul>
);

ReactDOM.render(el3, app);
