// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// import User from './user.jsx'
// import MyInfo from './MyInfo.jsx'
// import Hello from './hello.jsx'

// function App() {
//   const [counter, setCounter] = useState(0)

//   return (
//     <>
// <h1>counter Val: {counter}</h1>
// <User />
// <MyInfo />
// <Hello />
// <button onClick={() => setCounter(counter + 1)}>Increase Counter Val</button>

//      </>
//   )
// }
// export default App 


/* //  SECOND FUNCTION
import myImage from './assets/Image.png'


function App() {
  const name = "Sehrish";

  const userObj = {
    name: "Sehrish",
    email: "sehrish@gmail.com",
    age: 20,
  };

  const userArray = ["Sehrish", "Ali", "Sara"];

  let x = 20;
  let y = 30;
  let path="myImage;"

  function fruit() {
    return "Apple";
  }

  function sum(a, b) {
    return a + b;
  }

  function operation(a, b, op) {
    if (op === "+") {
      return a + b;
    } else if (op === "-") {
      return a - b;
    } else if (op === "*") {
      return a * b;
    }
  }

  return (
    <div>
      <h1>JSX with curly braces</h1>
      <h1>{name}</h1>
      <h1>{x + y}</h1>
      <h1>{fruit()}</h1>
      <h1>{sum(10, 20)}</h1>
      <h1>{operation(10, 20, "+")}</h1>
      <h1>{userObj.name}</h1>
      <h1>{userObj.email}</h1>
      <h1>{userArray[0]}</h1>
<input type="text" placeholder="Enter your name" style={{ width: "150px" }} />
<br/>
      <img src={myImage} alt="My Image" width="400" />
    </div>
  );
}

export default App; */

// STATE CODE

/* function App() {
  let fruit = "Mango";

  const handleFruit = () => {
    fruit = "Banana";
    console.log(fruit);
  }

  return (
    <div>
      <h1>State in React JS</h1>
      <h1>{fruit}</h1>
      <button onClick={handleFruit} >Change fruit name</button>
    </div>
  );
}

export default App;*/

// HOOKS CODE

/* import { useState } from 'react';
function App() {
  const { fruit, setFruit } = useState("Mango");
  
  }

  return (
    <div>
      <h1>State in React JS</h1>
      
    </div>
  );
export default App;  */
 
/* import Student from "./Student";

function App() {
  return (
    <div>
      <h1>Props in React JS</h1>
      <Student name="Sehrish" />
      <Student name="Ali" />
    </div>
  );
}

export default App; 
 */

/* 
import {useState} from 'react'
import Student from './Student';


function App() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <h1>Toggle in React js</h1>
            <button onClick={() => setDisplay(!display)}>Toggle</button>

      {
        // display ?  <h1>Sehrishh</h1>: null
         display ?  <Student/>: null
      }
     
    </div>
  );
}
 export default App;  */


/*  import { useState } from 'react';
 function App() {
  const [count, setCount] = useState(0);
return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1) }>Counter</button>
    {
      count==0?<h1>Condition 0</h1>
      :count==1?<h1>Condition 1</h1>
      :count==2?<h1>Condition 2</h1>
      :count==3?<h1>Condition 3</h1>
      :count==4?<h1>Condition 4</h1>
      :<h1>Other condition</h1> 
    }
    
    </div>
  );
}
export default App;
*/
/* import { useState } from "react";
import Props from "./assets/props.jsx";
import College from "./assets/College.jsx";
import Person from "./Person.jsx";

function App() { 
  let userObject = {
    name: "Sehrish",
    age: 20,
    email: "sehrish@example.com"
  };

  let userObject2 = {
    name: "Ali",
    age: 29,
    email: "ali@example.com"
  };

  let collegeNames = ["Harvard", "Stanford", "MIT"];

  const [person, setPerson] = useState("Sehrish");

  return (
    <div>
      <h1>Props in React JS</h1>

      {Person && <Person name={person} />}
      <button onClick={() => setPerson("Ali")}>update student name</button>

      <College name={collegeNames} />

      <Props user={userObject} />
      <Props user={userObject2} />
    </div>
  );
}
 
export default App;*/
 

/* // INPUT FIELD
import { useState } from "react";
function App() {
  const[val, setVal] = useState("sehrish")
  
  return (
    <div>
      <h1>Get Input field value</h1>
      <input type= "text" value={val} onChange={(event) => setVal(event.target.value)} placeholder="Enter your name  "/>
    <h1>{val}</h1>
    <button onClick={() => setVal("")}>Clear value</button>
    </div>
  );
}
export default App; */

/* import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Controlled Component</h1>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <h2>Your name is: {name}</h2>
    </div>
  );
}

export default App; */
/* function App() {
  const userData = [
    {
      name: "Sehrish",
      age: 20,
      email: "sehrish@example.com",
      id: 1
    },
    {
      name: "Ali",
      age: 29,
      email: "ali@example.com",
      id: 2
    },
    {
      name: "Sara",
      age: 29,
      email: "sara@example.com",
      id: 3
    },
    {
      name: "Ayesha",
      age: 29,
      email: "ayesha@example.com",
      id: 4
    }
  ];

  return (
    <div>
      <h1>Loops in React JS</h1>
      <table border="1">
<thead>
  <tr>
    
    <td>name </td>
    <td>age </td>
    <td>email </td>
    <td>id </td>


  </tr>

</thead>

      </table>
     <h1>Dummy data</h1>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>ID</th>
          </tr>
        </thead>

        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
 */




/* import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  const users = [
    { id: 1, name: "Sehrish", age: 21 },
    { id: 2, name: "Ali", age: 22 },
    { id: 3, name: "Sara", age: 20 },
  ];

  return (
    <div>
      <h1>React Practice</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>

     
      <br />
      <br />

      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

      {show && <h2>Hello! Welcome to React 👋</h2>}

    
      <h2>Users</h2>

      {users.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App; */



import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    alert(`Name: ${name}\nEmail: ${email}`);
  }

  return (
    <div>
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <br />

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        <br />
        <br />

        <label>Email:</label>
        <br />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>

      <h2>Preview</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default App;