function App2() {
    function callFun() {
    }
    const fruit=()=>{
        alert("name")
     

    }

    return(
        <div>
            <h1>Event and funtion call</h1>
            <button onClick={() => fruit("Apple")}>Apple</button>
            <button onClick={() => fruit("Banana")}>Banana</button>
        </div>
    )
}
export default App2;