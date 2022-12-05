import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Cart, WatchList } from "../Header/Context";

// import Watchlist from "../Header/pages/Watchlist";

const Img_API = "https://image.tmdb.org/t/p/w1280";

const defaultImg =
  "https://www.prokerala.com/movies/assets/img/no-poster-available.jpg";

function ShowTwo({
  movie,
  title,
  poster_path,
  original_language,
  overview,
  release_date,
  vote_average,
  vote_count,
  adult,
  // watchList,
  // setWatchList,
  // cart,
  // setCart,
}) {
  const { watchList, setWatchList } = useContext(WatchList);
  const { cart, setCart } = useContext(Cart);
  const Navigate = useNavigate();

  const buyPage = (e) => {
    Navigate("/buypage");

    // console.log(movie);
  };

  // console.log("hello", useContext(WatchList));

  // console.log("hello", useContext(Cart));

  //   let's convert release date into year

  // const year = release_date.substring(0, 4);

  const date = new Date(release_date);

  const year = date.getFullYear();

  var votes = vote_average == 6 ? "6.0" : vote_average;

  const setVoteClass = (vote) => {
    if (vote >= 7.5) {
      return "green";
    } else if (vote >= 6) {
      return "yellow";
    } else {
      return "red";
    }
  };

  useEffect(() => {
    console.log(watchList);
    console.log(cart);
  }, [watchList, cart]);

  // useEffect(() => {
  //   const list = localStorage.getItem("watchlist");
  //   setWatchList(JSON.parse(list));
  // }, []);

  // useEffect(() => {
  //   watchList && localStorage.setItem("watchlist", JSON.stringify(watchList));
  // }, [watchList]);

  // console.log(movie.id); // in this case we will get 20 outputs

  const addWatchlist = () => {
    setWatchList([...watchList, movie]);

    console.log("ADD WATCHLIST");
  };

  const removeWatchList = () => {
    setWatchList(watchList.filter((watch) => watch.id !== movie.id));

    console.log("REMOVE WATCHLIST");
  };

  const addCart = () => {
    setCart([...cart, movie]);

    console.log(movie.id); // in this case will get single output
  };

  const removeCart = () => {
    // !== check this condition means set which is not equal to id or remove which is equal to id

    setCart(cart.filter((cart) => cart.id !== movie.id));
  };

  return (
    <div className="poster">
      <img
        className="image"
        src={poster_path ? Img_API + poster_path : defaultImg}
        alt={title}
      />
      <div className="title">
        <h3 className="title1">{title}</h3>

        <span className={`vote ${setVoteClass(votes)}`}>{votes}</span>
      </div>
      <div className="movie-info">
        <h2>{title}</h2>
        <p>Released On : {" Year of " + year}</p>
        {watchList.includes(movie) ? (
          <button className="removewatchlist" onClick={removeWatchList}>
            RemovieWatchlist
          </button>
        ) : (
          <button className="addwatchlist" onClick={addWatchlist}>
            AddWatchlist
          </button>
        )}
        {cart.includes(movie) ? (
          <button className="removewatchlist" onClick={removeCart}>
            Remove from Cart
          </button>
        ) : (
          <button className="addwatchlist" onClick={addCart}>
            Add to Cart
          </button>
        )}
        <button className="buy" onClick={buyPage}>
          Buy
        </button>
        {/* <p>{overview}</p> */}

        {/* <div>
          {watchList.map((wacth) => (
            <Watchlist
              key={wacth.id}
              {...wacth}
              // {...movie}
              // watch={wacth}
              // watchList={watchList}
              // setWatchList={setWatchList}
              // movie={movie}
              // defaultImg={defaultImg}
              // Img_API={Img_API}
            />
          ))}
        </div> */}
      </div>
    </div>
  );

  // return (
  //   <div className="poster">
  //     <img
  //       className="image"
  //       src={movie.poster_path ? Img_API + movie.poster_path : defaultImg}
  //       alt={movie.title}
  //     />
  //     <div className="title">
  //       <h3 className="title1">{movie.title}</h3>
  //       <span className={`vote ${setVoteClass(votes)}`}>{votes}</span>
  //     </div>
  //     <div className="movie-info">
  //       {/* <p>{movie.id}</p> */}
  //       <h2>{movie.title}</h2>
  //       <p> Release On : {" Year of " + year} </p>
  //       <p>{movie.overview}</p>
  //     </div>
  //   </div>
  // );
}

export default ShowTwo;
