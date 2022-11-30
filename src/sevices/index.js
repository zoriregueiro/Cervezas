export const getBeers = async () => {
  if (!getBeers.cache) {
    const res = await fetch("https://api.punkapi.com/v2/beers/ ");
    console.log(res);
    const body = await res.json();
    console.log(body);
    getBeers.cache = body.map((beer) => ({
      filterName: beer.name.toUpperCase(),
      ...beer,
    }));
  }

  return getBeers.cache;
};

export const getBeer = async (id) => {
  if (!getBeer.cache) getBeer.cache = {};
  if (!getBeer.cache[id]) {
    const res = await fetch(`https://api.punkapi.com/v2/beers/`);
    console.log(res);
    const body = await res.json();
    console.log(body);
    getBeer.cache[id] = body[0];
  }

  return getBeer.cache[id];
};
