function add () {
  let num = 0;
  return function () {
    num += 1;
    return num;
  }
}

console.log(add()());

const useState = (defaultValue) => {
  let innerState = defaultValue;
  const state = () => innerState;
  const setState = (value) => {
    innerState = value;
  }
  return [state, setState];
}