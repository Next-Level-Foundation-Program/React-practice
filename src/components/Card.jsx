import "./Card.css";
//ternary operator
export default function Card({name, age}) {
    const clickHandler = (membername) =>{
        console.log("Greetings " + membername);
    }

     const anotherClickHandler = (name) => {
       console.log("Another greetings " + name);
     }

    const greetings = (name) =>{
      clickHandler(name)
      anotherClickHandler(name)
    }
    return (
        <div
        onClick={()=> greetings(name)}
         className="card">
            <p>Name: {name}</p>
            <p>Name: {age}</p>
        </div>
    )
}