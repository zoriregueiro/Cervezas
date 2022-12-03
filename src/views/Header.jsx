import logo from "../imagenes/Logo.png"
import menu from "../imagenes/Menu.png"
import { getBeers } from "../sevices";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";



const Header = () => {

    const [filter, setFilter] = useState("");
    const [beers, setBeers] = useState([]);
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
     
return (
<header>
<img src={logo} alt="imagen logo" />
<input
    className="toolBar"
    placeholder="Search here"
    type="text"
    onChange={filterData}
    value={filter}
    ></input>
    <img src={menu} alt="icono menu" />
    </header>
)

}


export default Header;