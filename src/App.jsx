// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// import User from './User.jsx'
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

function App(){
  return (
    <div>
    <h1>First component</h1>
        <Fruit />
        <Colors/>
     </div>

  )
}

function Fruit(){
  return(
    <h1>Apple</h1>
  )


  }


function Colors(){
  return(
    <h1>Red Color</h1>
  )


  }


export default App;