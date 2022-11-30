import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getBeer } from "../sevices";

function Detalles() {
  const { id } = useParams();
   // eslint-disable-next-line
  const navigate = useNavigate();
  const [beer, setBeer] = useState({});

  useEffect(() => {
    const loadData = () => loadBeer(id);
    loadData();
  }, [id]);

  const loadBeer = async (e) => {
    try {
      const beer = await getBeer(e);

      setBeer(beer);
    } catch (error) {
      console.error("error", e);
    }
  };

  return (
    <div className="beer">
      <div className="description">
        <div className="detail" key={beer.id}>
          <p>{beer.name}</p> <p className="description">{beer.description}</p>
          <h2>Related flavors</h2><p>{beer.food_pairing}</p>
        </div>
        <div className="imageDetail">
        <img alt={beer.name} src={beer.image_url} />
        </div>
      </div>
    </div>
  );
}

export default Detalles;
