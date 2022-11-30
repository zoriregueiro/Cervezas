import { useNavigate } from "react-router-dom";


function HomePage() {
    const navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = "/beers"; 
      navigate(path);
    }
    return <div className="home">
<button type="button" onClick={routeChange}> Start experience </button>
</div>}



export default HomePage;

