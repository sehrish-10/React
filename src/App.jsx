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

export default App;
 */

/* // HOOKS CODE
// useState

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default App;


// useEffect


import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default App;
 */


/* // MULTIPLE IF-ELSE STATEMENTS
function App() {
  let age = 18;

  if (age >= 18) {
    return <h1>You are an adult</h1>;
  } else {
    return <h1>You are a child</h1>;
  }
}

export default App;


// TERNARY OPERATOR
function App() {
  let isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? <h1>Welcome!</h1> : <h1>Please Login</h1>}
    </div>
  );
}

export default App; */

/* // PROPS CODE
// PARENT
import User from "./User";

function App() {
  return (
    <div>
      <h1>My App</h1>

      <User name="Sehrish" age={21} />
    </div>
  );
}

export default App;


// CHILD
function User(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h2>Age: {props.age}</h2>
    </div>
  );
}

export default User; */


// PASSING A MESSAGE
/* import Message from "./Message";

function App() {
  return (
    <div>
      <Message text="Hello Sehrish!" />
    </div>
  );
}

export default App;

// PASSING MULTIPLE VALUES
import Student from "./Student";

function App() {
  return (
    <div>
      <Student name="Sehrish" age={21} city="Peshawar" />
    </div>
  );
}

export default App */;

// TOGGLE
/* import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>Toggle Example</h1>

      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

      {show && <h2>Hello! I can be hidden and shown.</h2>}
    </div>
  );
}

export default App; */

// CONDITIONAL RENDERING
/* import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>Conditional Rendering</h1>

      {isLoggedIn ? (
        <h2>Welcome, User!</h2>
      ) : (
        <h2>Please Login</h2>
      )}

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default App; */
/* 
function App() {
  const fruits = ["Apple", "Mango", "Banana", "Orange"];

  return (
    <div>
      <h1>Fruits</h1>

      <ul>
        {fruits.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

//  Controlled Components

import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Controlled Component</h1>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Your Name: {name}</h2>
    </div>
  );
}

export default App; */

//  Handle Checkboxes & Get Value
import { useState } from "react";

function App() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <h1>Checkbox</h1>

      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />

        I agree
      </label>

      <h2>{isChecked ? "Checked" : "Not Checked"}</h2>
    </div>
  );
}

export default App;

// 3. Multiple Checkboxes

import { useState } from "react";

function App() {
  const [skills, setSkills] = useState([]);

  const handleChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((skill) => skill !== value));
    }
  };

  return (
    <div>
      <h1>Select Skills</h1>

      <label>
        <input
          type="checkbox"
          value="HTML"
          onChange={handleChange}
        />
        HTML
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          value="CSS"
          onChange={handleChange}
        />
        CSS
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          value="JavaScript"
          onChange={handleChange}
        />
        JavaScript
      </label>

      <h2>Selected Skills:</h2>

      {skills.map((skill) => (
        <p key={skill}>{skill}</p>
      ))}
    </div>
  );
}

export default App;


//  Radio Buttons & Get Values
import { useState } from "react";

function App() {
  const [gender, setGender] = useState("");

  return (
    <div>
      <h1>Select Gender</h1>

      <label>
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={(e) => setGender(e.target.value)}
        />
        Male
      </label>

      <br />

      <label>
        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={(e) => setGender(e.target.value)}
        />
        Female
      </label>

      <h2>Selected: {gender}</h2>
    </div>
  );
}

export default App;



//  Loop in JSX with map()
function App() {
  const fruits = ["Apple", "Mango", "Banana", "Orange"];

  return (
    <div>
      <h1>Fruits</h1>

      {fruits.map((fruit) => (
        <h2 key={fruit}>{fruit}</h2>
      ))}
    </div>
  );
}

export default App;