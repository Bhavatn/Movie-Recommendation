import React from 'react';
import MovieCard from './MovieCard';

function Favourites({ movies, favourites, watchedStatus, onToggleFavourite, onMarkAsWatched }) {
		const favouriteMovies = movies.filter(movie => favourites[movie.id]);

		if (favouriteMovies.length === 0) {
			return <div style={{ fontSize: '1.2rem', color: '#888', marginTop: '2rem' }}>No favourites added yet.</div>;
		}

		return (
			<div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem' }}>
				{favouriteMovies.map((movie) => (
					<MovieCard
						key={movie.id}
						movie={movie}
						isWatched={watchedStatus[movie.id]}
						isFavourite={favourites[movie.id]}
						onToggleFavourite={onToggleFavourite}
						onMarkAsWatched={onMarkAsWatched}
					/>
				))}
			</div>
		);
}

export default Favourites;
