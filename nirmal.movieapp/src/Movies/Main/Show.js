import React, { useContext, useEffect, useState } from "react";
// import Navbar from "../Navbar/Navbar";
// import Search from "./Search";
// import { Gobal } from "../Navbar/Navbar";
import { WatchList } from "../Header/Context";
import ShowTwo from "./ShowTwo";

function Show(props) {
  // const { handleOnSubmit } = useContext(Gobal);

  const { watchList, setWatchList } = useContext(WatchList);

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [pages, setPages] = useState(1);
  const [totalpages, setTotalPages] = useState(0);
  const [totalresults, setTotalResults] = useState(0);
  // const [watchList, setWatchList] = useState([]);
  const [cart, setCart] = useState([]);

  const Future_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${pages}`;

  const Search_API = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${searchTerm}&page=${pages}`;

  useEffect(() => {
    props.searchTerm && setSearchTerm(props.searchTerm);

    setPages(1);

    //  it will store the data on setSearchTerm
  }, [props.searchTerm]);

  useEffect(() => {
    searchTerm ? getMovies(Search_API) : getMovies(Future_API);

    // to avoid default render while searching to use above condition

    window.scroll(0, 0);
  }, [pages, searchTerm]);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log("get call from child function", data);

        console.log("No of pages ", data.total_pages);

        console.log("No of results ", data.total_results);

        setMovies(data.results);

        setTotalPages(data.total_pages);

        setTotalResults(data.total_results);
      });
  };

  //  2nd method for get data from child by using useContext

  // const handleOnSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("hi");
  //   if (searchTerm) {
  //     getMovies(Search_API + searchTerm);

  //     setSearchTerm("");
  //   }
  // };

  // const handleOnChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  //    1st method to get data from child

  // function getData(data) {
  //   console.log("get the data from child", data);

  //   setSearchTerm(data);
  // }

  // console.log(watchList);

  // console.log(cart);

  return (
    <>
      {/* <Navbar onSubmit={getData} /> */}

      {/* <div className="search">
        <form onSubmit={handleOnSubmit}>
          <input
            type="search"
            placeholder="Search....."
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </div> */}

      {/* <Search onSubmit={getData} /> */}

      <div className="container">
        {movies.map((movie) => (
          <ShowTwo
            key={movie.id}
            {...movie}
            movie={movie}
            // cart={cart}
            // setCart={setCart}
            // watchList={watchList}
            // setWatchList={setWatchList}
          />
        ))}
      </div>
      <div>
        <p>
          Pages <b>{pages}</b> of {totalpages}
        </p>
        <p>Total Movies - {totalresults}</p>

        <button onClick={() => setPages(pages - 1)}>Previous</button>
        <button onClick={() => setPages(pages + 1)}>Next</button>
      </div>
    </>
  );
}

export default Show;
