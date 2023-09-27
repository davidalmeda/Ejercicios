function EjercicioJsx() {
    function principalAction() {
        console.log("Hola que tal")
    }
    function secondaryAction(event, param) {
        console.log(event)
        console.log(param)
    }
    return (
      <>
        <button onClick={principalAction}>Principal</button>
        <button onClick={(e) => secondaryAction(e, "Hola")}>Secondary</button>
      </>
    )
  }
  
  export default EjercicioJsx
  