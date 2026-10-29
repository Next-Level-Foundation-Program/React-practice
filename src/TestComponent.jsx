/* 
   1. File extension must be .jsx
   2. Component name must start with capital letter
   3. There must be a default export / export
   4. There must be a single root return

   React Fragments: allow you to group multiple child elements together without adding extra, unnecessary nodes to the HTML DOM tree
 */

// 1. first way to write a component
// const TestComponent = () =>{
//     return <h1>Test Component</h1>
// };

// export default TestComponent;

// 2. Second way

const name = "Mainul"

export default function TestComponent() {
    return (
        <>
        <div>
            <h1>Hello, World</h1>
            <p>My name is {name}</p>
            <span>I am from BD</span>
        </div>
        <div>Programming Hero</div>
        </>
    );
};