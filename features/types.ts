// See that if you try to access properties or methods on any of these object TS will throw and error
const today = new Date();
today.getMonth();

const person = {
  age: 20,
};

class Color {}
const red = new Color();
