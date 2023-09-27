function Imagen(props) {

    return (
      <div className={props.className}>
        <img src={props.name} alt={props.title}/>
      </div>
    )
  }
  
  export default Imagen
  