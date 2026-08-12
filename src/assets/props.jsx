function Props(props) {
  return (
    <div>
      <hr/>
      <h1>Name: {props.user.name}</h1>
      <h1>Age: {props.user.age}</h1>
      <h1>Email: {props.user.email}</h1>
    </div>
  );
}

export default Props;