import { useState, useEffect } from "react";
import { getBeers } from "../sevices";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import "./Beers.css";
import logo from "../imagenes/Logo.png"
import menu from "../imagenes/Menu.png"

const Beers = () => {
const [beers, setBeers] = useState([]);
const [filter, setFilter] = useState("");
const navigate = useNavigate();

const [searchParams, setSearchParams] = useSearchParams();

useEffect(() => {
setFilter((searchParams.get("query") || "").toUpperCase());
const loadData = ()=> loadBeers();
loadData();
// eslint-disable-next-line
}, []);


const filterData = (e) => {
setFilter(e.target.value.toUpperCase());
searchParams.set("query", e.target.value.toUpperCase());
setSearchParams(searchParams);
};

const loadBeers = async (e) => {
try {
const beers = await getBeers();

setBeers(beers);
} catch (error) {
console.error("error", e);
}
};

function redirect(id) {
navigate("/beers/" + id);
}

return (
<div>
<header>
<img className="logo" src={logo} alt="imagen logo" />
<input
className="toolBar"
placeholder="Search here"
type="text"
onChange={filterData}
value={filter}
></input>
<img className="menu" src={menu} alt="icono menu" />
</header>
<div className="beer">
  <div className="first">
    <div className="title">
      <h1>Beer Museum</h1>
      <h2>Live de beer experience in Coruña</h2>
      <button type="buttom">View products</button>
    </div>

  </div>
<div className="flexTitle">
<h2>Discover our beers</h2>
<h3>Brewery tradition and innovation</h3>
</div>
<div className="flex">        
{beers
  .filter((beer) => beer.filterName.includes(filter))
  .map((beer) => (
    <div
      className="container"
      onClick={() => redirect(beer.id)}
      key={beer.id}
    >
      <img alt={beer.name} src={beer.image_url} />
      <div><p>{beer.name}</p> <p>{beer.tagline}</p></div>
      
  </div>
  ))}
        {/* <button type="buttom">View products</button>  */}
</div>
<div className="recipes">
  <div className="textRecipes">
    <h2>Discover recipes to challenge your senses</h2>
    <h3>Ideal gastronomic experiences to accompany with beers</h3>
    <button type="buttom">View recipes</button>
  </div>
</div>
      <div className="history">
        <div className="textHistory">
          <h2>Did you know...?</h2>
          <h3>Interesting facts about beer</h3>
        </div>
        <div className="information">
          <div className="barrel">
            <img src="" alt="" />
            <h2>Beer foam</h2>
            <h3>What is taken into account when tasting?</h3>
            <p>The more foam your cup or glass has, the more the contact of the liquid with the air will be avoided, and this serves so that the drink does not become oxygenated and does not lose gas as quickly.</p>
          </div>
          <div className="woman">
            <img src="" alt="" />
            <h2>The woman</h2>
            <h3>The importance of women in the history of beer</h3>
            <p>In the Roman Empire, women were in charge of production for the entire community. In England since medieval times, the "alewives" brewed the beer. The nun Hidelgara de Bingen wrote a compendium on the use of hops as a medicinal plant.</p>
          </div>
        </div>
        <button type="buttom"></button>
  </div>
</div>
</div>
);
};

export default Beers;

