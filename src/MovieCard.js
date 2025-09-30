import React from 'react';

function MovieCard({ movie, isWatched, isFavourite, onToggleFavourite, onMarkAsWatched }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', width: '200px', padding: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '32px', marginBottom: '8px' }}>
        <span
          onClick={() => onToggleFavourite(movie.id)}
          style={{
            fontSize: '1.8rem',
            color: isFavourite ? 'red' : '#bbb',
            cursor: 'pointer',
            userSelect: 'none',
            zIndex: 2
          }}
          title={isFavourite ? 'Remove from Favourites' : 'Add to Favourites'}
        >
          {isFavourite ? '♥' : '♡'}
        </span>
      </div>
      <img src={movie.image} alt={movie.title} style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '4px', display: 'block', marginBottom: '8px' }} />
      <h3 style={{ margin: '1rem 0 0.5rem 0' }}>{movie.title}</h3>
      <p>Rating: {movie.rating}</p>
      <p>Status: <span style={{ fontWeight: 'bold', color: isWatched ? 'green' : 'orange' }}>{isWatched ? 'Watched' : 'To Watch'}</span></p>
      <button
        className={`watched-btn${isWatched ? ' watched' : ''}`}
        onClick={() => onMarkAsWatched(movie.id)}
        disabled={isWatched}
      >
        {isWatched ? 'Watched' : 'Mark as Watched'}
      </button>
    </div>
  );
}

export default MovieCard;
