import './App.css';
import React, { useState } from 'react'
import { MovieList } from './Components/Movie/MovieList';
import NavBar from './Components/Movie/NavBar';


function App() {

  const data = [
    {
      title: "The Shawshank Redemption",
      desc: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      id: Math.random(),
      rate: 5,
      imgSrc: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL100_UX258.jpg"
    }, {
      title: "The Godfather",
      desc: "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
      id: Math.random(),
      rate: 4,
      imgSrc: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL100_UX258.jpg"
    }, {
      title: "The Godfather: Part II",
      desc: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
      id: Math.random(),
      rate: 4,
      imgSrc: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL100_UX258.jpg"
    }, {
      title: "The Dark Knight",
      desc: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      id: Math.random(),
      rate: 3,
      imgSrc: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL100_UX258.jpg"
    }, {
      title: "Minimalism",
      desc: "Examining the many levels of minimalism by looking inside the lives of minimalists from various walks of life.",
      id: Math.random(),
      rate: 4,
      imgSrc: "https://m.media-amazon.com/images/M/MV5BZjZjODAwMGQtOGM4NC00ZjJiLWI2ZGEtNzY5ZTY2ZGQ2NDBlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL100_UX258.jpg"
    }, {
      title: "The Great Hack",
      desc: "The Cambridge Analytica scandal is examined through the roles of several affected persons.",
      id: Math.random(),
      rate: 3,
      imgSrc: "https://m.media-amazon.com/images/M/MV5BMGViZWEwOGItMGZlMC00YzE1LTk5ZWItMGYxYjhhMjBmNDMwXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_QL100_UX258.jpg"
    }, {
      title: "The Social Dilemma",
      desc: "Explores the dangerous human impact of social networking, with tech experts sounding the alarm on their own creations.",
      id: Math.random(),
      rate: 4,
      imgSrc: "https://m.media-amazon.com/images/M/MV5BNDVhMGNhYjEtMDkwZi00NmQ5LWFkODktYzhiYjY2NTZmYTNhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL100_UX258.jpg"
    }, {
      title: "Gandhi",
      desc: "The life of the lawyer who became the famed leader of the Indian revolts against the British rule through his philosophy of nonviolent protest.",
      id: Math.random(),
      rate: 4,
      imgSrc: "https://m.media-amazon.com/images/M/MV5BMzJiZDRmOWUtYjE2MS00Mjc1LTg1ZDYtNTQxYWJkZTg1OTM4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_QL100_UX258.jpg"
    }, {
      title: "The Wolf of Wall Street",
      desc: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
      id: Math.random(),
      rate: 5,
      imgSrc: "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_QL100_UX258.jpg"
    }]


  const [movieList, setMovieList] = useState(data);
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  const [rate, setRate] = useState(0)
  const ratingChanged = (newRating) => {
    setRate(newRating)
  }

  const handleAdd = (imgSrc, title, rate, desc, id) =>
    setMovieList([...movieList, { imgSrc, title, rate, desc, id }]);


  const handleDelete = (id) => {
    setMovieList(movieList.filter(movie => movie.id !== id))
  }



  return (
    <div >
      <NavBar handleAdd={handleAdd} ratingChanged={ratingChanged} handleSearch={handleSearch} movieList={movieList} />
      <MovieList movieList={movieList.filter((movie) => movie.rate >= rate)} handleDelete={handleDelete} search={search} />
    </div>
  );
}

export default App;
