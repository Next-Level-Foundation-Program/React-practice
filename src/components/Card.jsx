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
export default function Card({firstName, lastName, age, children}) {
    return <div>
        {children}
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <span>Age: {age}</span>
    </div>
}