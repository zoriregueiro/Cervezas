import caña from "../imagenes/caña.jpg"


const Header = () => {
    return (
        
        <header className="header">
            <h1>Beers Museum</h1>
            <div className="caña">
                <img src={caña} alt="imgen botella"/>
            </div>
            
            
        </header>
    )
}


export default Header;