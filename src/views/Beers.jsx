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
</div>
</div>
</div>
);
};

export default Beers;

