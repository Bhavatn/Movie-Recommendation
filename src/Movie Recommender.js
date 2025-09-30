import React, { useRef, useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import Favourites from './Favourites';
import './App.css';

function MovieRecommender() {
  const [favourites, setFavourites] = useState({});
  const [selectedTab, setSelectedTab] = useState('Home');

  const handleToggleFavourite = (id) => {
    setFavourites((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  const [watchedStatus, setWatchedStatus] = useState({});

  const handleMarkAsWatched = (id) => {
    setWatchedStatus((prev) => ({ ...prev, [id]: true }));
  };
  const inputRef = useRef(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const movies = [
    {
      id: 1,
      title: 'Thudaram',
      rating: 8.8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmAAx-AlNkT1tB_zo4lRDGlwVrhj_eHKTa-IicVvnQ1ZbwoZ8znWSbZylHpZF5No69gk_-SQ',
    },
    {
      id: 2,
      title: 'L2:Empuraan',
      rating: 8.6,
      image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSiKWspWcTLbzm2yIisQjExezQ_cWVcFXL7FQig1qKsyfLiW2HaNSXPnlYghGkAQX8HruYA',
    },
    {
      id: 3,
      title: 'Lokah',
      rating: 9.0,
      image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTovxvZdiqAQ0s_SdBVneMbP_wtMGLAegqY8aT8SSYwzcCYx97q169M33Xc_78eOMfYnseo',
    },
    {
      id: 4,
      title: 'Narivetta',
      rating: 8.5,
      image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/narivetta-et00443661-1747841383.jpg',
    },
    {
      id: 5,
      title: 'The Malabar Tales',
      rating: 8.7,
      image: 'https://m.media-amazon.com/images/M/MV5BNDY4OWY1YWMtNzg4My00NGY3LWI5ZTUtZjI2ZThmYjE3YmIyXkEyXkFqcGc@._V1_.jpg',
    },
    {
      id: 6,
      title: 'Ne Zha 2',
      rating: 8.1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTffQf3yOnzF_yT4Chzq1P8oPVCIsoCsynSUA&s',
    },
    {
      id: 7,
      title: 'Lilo & Stitch',
      rating: 8.4,
      image: 'https://play-lh.googleusercontent.com/Zy1PXAxVYAMKliX094RjrxURo-bmG9uOYWos1WXLBUs3QK6XMjSt7uTryhqcnj7d1no8t4LPW4Ps3rcwyAg',
    },
    {
      id: 8,
      title: 'A Minecraft Movie',
      rating: 8.3,
      image: 'https://upload.wikimedia.org/wikipedia/en/6/66/A_Minecraft_Movie_poster.jpg',
    },
    {
      id: 9,
      title: 'Jurassic World Rebirth',
      rating: 8.2,
      image: 'https://m.media-amazon.com/images/M/MV5BMGM3ZmI3NzQtNzU5Yi00ZWI1LTg3YTAtNmNmNWIyMWFjZTBkXkEyXkFqcGc@._V1_.jpg',
    },
    {
      id: 10,
      title: 'F1',
      rating: 9.0,
      image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTQ2Nx_8NdsCMpxJWX4-HvMkGcfCUAe20INzWi5KzedTZR0gt_KLDhvpYRVZcuph23dHZUmaw',
    },
  ];

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="app-title">Movie Recommendation</h1>
      <div className="tab-bar">
        <button
          className={`tab-btn${selectedTab === 'Home' ? ' active' : ''}`}
          onClick={() => setSelectedTab('Home')}
        >
          Home
        </button>
        <button
          className={`tab-btn${selectedTab === 'Favourites' ? ' active' : ''}`}
          onClick={() => setSelectedTab('Favourites')}
        >
          Favourites
        </button>
        <button
          className={`tab-btn${selectedTab === 'About' ? ' active' : ''}`}
          onClick={() => setSelectedTab('About')}
        >
          About
        </button>
      </div>

      {selectedTab === 'Home' && (
        <>
          <div className="search-bar-wrapper">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search Movies"
              className="search-bar"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="card-grid">
            {filteredMovies.length === 0 ? (
              <div className="no-results">No results found</div>
            ) : (
              filteredMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  isWatched={watchedStatus[movie.id]}
                  isFavourite={favourites[movie.id]}
                  onToggleFavourite={handleToggleFavourite}
                  onMarkAsWatched={handleMarkAsWatched}
                />
              ))
            )}
          </div>
        </>
      )}

      {selectedTab === 'Favourites' && (
        <div className="card-grid">
          <Favourites
            movies={movies}
            favourites={favourites}
            watchedStatus={watchedStatus}
            onToggleFavourite={handleToggleFavourite}
            onMarkAsWatched={handleMarkAsWatched}
          />
        </div>
      )}

      {selectedTab === 'About' && (
        <div className="about-section about-wide">
          <p style={{ fontSize: '1.35rem', marginBottom: '2rem' }}>
            Movie Recommendation App helps you discover, track, and organize your favorite movies. Easily search, mark as watched, and curate your personal favourites list.<br /><br />
            <b>Features:</b>
          </p>
          <ul className="about-list">
            <li>Search for movies by title</li>
            <li>Mark movies as watched</li>
            <li>Add or remove movies from your favourites</li>
            <li>View your favourite movies in a dedicated tab</li>
          </ul>
          <p style={{ fontSize: '1.2rem', marginTop: '2rem', textAlign: 'center' }}>
            Enjoy exploring movies, keeping track of what you've watched, and building your own favourites collection!
          </p>
        </div>
      )}
      <footer className="footer">
        For Queries : <a href="mailto:bhavatharininatesan@gmail.com">bhavatharininatesan@gmail.com</a>
      </footer>
    </div>
  );
}
export default MovieRecommender;
