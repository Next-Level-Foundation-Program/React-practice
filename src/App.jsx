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
