const list = [
  {
    name: 'Adriano',
    age: 29
  },
  {
    name: 'Maria',
    age: 15
  },
  {
    name: 'Alessandro',
    age: 17
  },
  {
    name: 'Joana',
    age: 22
  },
  {
    name: 'Carlos',
    age: 45
  },
  {
    name: 'Júlia',
    age: 19
  },
  {
    name: 'Pedro',
    age: 11
  }
]

const newList = list.map(({ name, age }) => ({
  name,
  isAdult: age >= 18
}))

console.log(newList)
