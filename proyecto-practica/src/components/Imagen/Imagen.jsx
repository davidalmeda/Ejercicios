function Imagen({className, link, title}) {

    return (
      <div>
        <img className={className} src={link} alt={title}/>
      </div>
    )
  }
  
  export default Imagen