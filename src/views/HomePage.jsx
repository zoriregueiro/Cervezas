import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import logo from "../imagenes/Logo.png"
import instagram from "../imagenes/instagram.png"
import whatsapp from "../imagenes/whatsapp.png"
import facebook from "../imagenes/facebook.png"

function HomePage() {
  const navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = "/beers"; 
    navigate(path);
  }
  return (
  <div className="home">
<img src={logo} alt="logo marga" />
<button type="button" onClick={routeChange}> Start experience </button>

<div className="footer">
<div className="instagram">
  <img src={instagram} alt="logo instagram" />
  <p>@beer_museum</p>
</div>
<div className="whatsapp">
  <img src={whatsapp} alt="logo whatsapp" />
  <p> (+34) 654575865</p>
</div>
<div className="facebook">
  <img src={facebook} alt="logo facebook" />
  <p>@beer_museam</p>
</div>

</div>
</div>) 
}




export default HomePage;

