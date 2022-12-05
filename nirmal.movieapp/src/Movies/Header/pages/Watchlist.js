import React, { useContext } from "react";
import ShowTwo from "../../Main/ShowTwo";
import { WatchList } from "../Context";
// import "./Watchlist.css";

// import Navbar from "../../Navbar/Navbar";

// const Img_API = "https://image.tmdb.org/t/p/w1280";

// const defaultImg =
//   "https://www.prokerala.com/movies/assets/img/no-poster-available.jpg";

function Watchlist() {
  const { watchList, setWatchList } = useContext(WatchList);

  // useEffect(() => {
  //   const list = Window.localStorage.getItem("watchlist");
  //   setWatchList(JSON.parse(list));
  // }, []);

  // useEffect(() => {
  //   Window.localStorage.setItem("watchlist", JSON.stringify(watchList));
  // });

  // console.log("me", watchList);

  return (
    <>
      {/* <Navbar /> */}

      {/* <p className=" poster1">
        <img
          className="image-watchlist"
          src={
            watchList.poster_path ? Img_API + watchList.poster_path : defaultImg
          }
          alt={watchList.title}
        />
        <p className="title">
          <h3 className="title1">{watchList.title}</h3>
        </p>
      </p> */}

      <h3>WatchList</h3>

      {watchList.map((wacth) => (
        <ShowTwo
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
    </>
  );
}

export default Watchlist;
