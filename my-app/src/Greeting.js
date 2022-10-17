function Greeting() { // o para exportar le agrego el export
    function add(x, y){
      return x + y
    }
    const name = "Meta";
    const married = true;
    const user = {
      firstName: "Ryan",
      lastName: "Ray",
    };
    return (
      <div>
        <h1>
          Hello world {name}, {married ? "Im married" : "Im not married"}
        </h1>
        <p>{user.firstName}</p>
        <p>{user.lastName}</p>
        <p>{add(10, 30)}</p>
      </div>
    );
}

export default Greeting