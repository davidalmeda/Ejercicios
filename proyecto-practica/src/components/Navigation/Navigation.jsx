import './index.css'
const links = [
    {
        name: "Babelnet",
        link: 'https://mybabel.sharepoint.com/',
    },
    {
        name: "Twiter",
        link:'https://www.facebook.com/?locale=es_ES',
    },
    {
        name: "Facebook",
        link:'https://twitter.com/?lang=es',
    }
]
function Navegation(props) {
    function renderList() {
        return links.map((elem) => 
            <li className='element' key = {elem.name}>
                <a href={elem.link}>{elem.name}</a>
            </li>
        )
    }
  return (
    <div>
        <ol className='lista'>
            {renderList()}
        </ol>
    </div>
  )
}

export default Navegation