function Imagen(props) {

    return (
      <div className={props.className}>
        <img className={props.className} src={props.name} alt={props.title}/>
      </div>
    )
  }
  
  export default Imagen
  