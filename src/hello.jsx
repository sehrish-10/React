function Hello() {
    const userName="Sehrish";
    let x=20;
    let y=30;
    return(
        <>
        <h1>{userName}</h1>
<h1>{10 + 20 + 30}</h1>
<h1>{x * y}</h1>
<button onClick ={() => alert("button clicked")}>Click Me</button>


</>

    )}
    export default Hello;