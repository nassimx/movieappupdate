import './App.css';
import React, { useState } from 'react'
import { MovieList } from './Components/MovieList';
import AddNewMovie from './Components/AddNewMovie'
import { AppBar, Toolbar, IconButton, Typography, InputBase, makeStyles, fade } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ReactStars from "react-rating-stars-component";


function App() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },



  }
  ));
  const classes = useStyles();

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
      title: "Mr. Robot",
      desc: "Elliot, a brilliant but highly unstable young cyber-security engineer and vigilante hacker, becomes a key figure in a complex game of global dominance when he and his shadowy allies try to take down the corrupt corporation he works for.",
      id: Math.random(),
      rate: 4,
      imgSrc: "https://m.media-amazon.com/images/M/MV5BMzgxMmQxZjQtNDdmMC00MjRlLTk1MDEtZDcwNTdmOTg0YzA2XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_QL100_UX258.jpg"
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

  const handleAdd = (newMovie) => {
    setMovieList([...movieList, newMovie])
  }

  const handleDelete = (id) => {
    setMovieList(movieList.filter(movie => movie.id !== id))
  }



  return (
    <div >

      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: "#232323" }}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              MrMovieInfo
            </Typography>
            <AddNewMovie handleAdd={handleAdd} />
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                onChange={handleSearch}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <MovieList movieList={movieList.filter((movie) => movie.rate >= rate )} handleDelete={handleDelete} search={search} />
    </div>
  );
}

export default App;
