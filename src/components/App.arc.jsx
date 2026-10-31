import './App.css'
import Card from './components/Card'

const members = [
{name: "Mainul", age: 22},
{name: "Musta", age: 32},
{name: "Sagor", age: 2},
{name: "Momin", age: 55}
]

function App() {

  return (
    <div>
      {/*<Card name={members[0].name} age={members[0].age}/>
      <Card name={members[1].name} age={members[1].age}/>
      <Card name={members[2].name} age={members[2].age}/> */}
      {
        members
        .filter((member) => member.age > 18)
        .sort((a, b) => b.age -a.age)
        .map((member) => <Card name={member.name} age={member.age}/>
      )}
    </div>
  )
}

export default App