// import "./Card.css"
//  Props and children

// export default function Card(probs) {
//     console.log(probs);
//     return <div>
//         {probs.children}
//         <p>First Name: {probs.firstName}</p>
//         <p>Last Name: {probs.lastName}</p>
//         <span>Age:{probs.age}</span>
//     </div>
// }

// object destructure
// export default function Card({firstName, lastName, age, children}) {
//     return <div>
//         {children}
//         <p>First Name: {firstName}</p>
//         <p>Last Name: {lastName}</p>
//         <span>Age: {age}</span>
//     </div>
// }

// conditional rendering
// export default function Card({name, age}) {
//     if (age < 18){
//         return <div className="card">{name} You are not allowed</div>
//     }
//     return <div className="card">
//         <p>First Name: {name}</p>
//         <span>Age: {age}</span>
//     </div>
// }

// export default function Card({name, age}) {
//     return <>
//     {age > 18 && (<div className="card">
//         <p>First Name: {name}</p>
//         <span>Age: {age}</span>
//     </div>)}

//     {age < 18 && <div className="card">{name} You are not allowed</div>}
//     </>
// }

//ternary operator
export default function Card({name, age}) {
    return <>
    {age > 18 ? <div className="card">
        <p>First Name: {name}</p>
        <span>Age: {age}</span>
    </div> : <div className="card">{name} You are not allowed</div>
    }
    </>
}