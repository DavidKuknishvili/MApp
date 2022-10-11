import { API_KEY } from './condig';
const genres = {
  12: 'Adventure',
  14: 'Fantasy',
  16: 'Animation',
  18: 'Drama',
  27: 'Horror',
  28: 'Action',
  35: 'Comedy',
  36: 'History',
  37: 'Western',
  53: 'Thriller',
  80: 'Crime',
  99: 'Documentary',
  878: 'Science Fiction',
  9648: 'Mystery',
  10402: 'Music',
  10749: 'Romance',
  10751: 'Family',
  10752: 'War',
  10770: 'TV Movie',
};

const POPULAR_API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`;

const getImagePath = (path) =>
  `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;
const getBackdropPath = (path) =>
  `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${path}`;

export const getMovies = async () => {
  const { results } = await fetch(POPULAR_API_URL).then((x) => x.json());
  const movies = results.map(
    ({
      id,
      original_title,
      poster_path,
      backdrop_path,
      vote_average,
      overview,
      release_date,
      genre_ids,
      vote_count,
    }) => ({
      id: String(id),
      title: original_title,
      image: getImagePath(poster_path),
      backdrop: getBackdropPath(backdrop_path),
      rating: vote_average,
      description: overview,
      releaseDate: release_date,
      genres: genre_ids.map((genre) => genres[genre]),
      vote_count:vote_count
    })
  );
  // console.log(movies)

  return movies;
};


export const categoryMovieData = async ( category )=> {
  const CATEGORY_API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key='+ API_KEY + '&with_genres='+category.toString()
  // console.log('------------------------------------------------------------------------------------',CATEGORY_API_URL)
  const { results } = await fetch(CATEGORY_API_URL).then((x) => x.json());

  const movies = results.map(
    ({
      id,
      original_title,
      poster_path,
      backdrop_path,
      vote_average,
      overview,
      release_date,
      genre_ids,
    }) => ({
      id: String(id),
      title: original_title,
      image: getImagePath(poster_path),
      backdrop: getBackdropPath(backdrop_path),
      rating: vote_average,
      description: overview,
      releaseDate: release_date,
      genres: genre_ids.map((genre) => genres[genre]),
    })
  );
  // console.log(movies , CATEGORY_API_URL)
  return movies


}

export const movieTrailerId = async (movieid) => {
  const url  = 'https://api.themoviedb.org/3/movie/'+movieid+'/videos?api_key='+API_KEY+'&language=en-US'
  const { results } = await fetch(url).then((x) => x.json() )
  const trailers = results.map(
    ({
      key,
      name

    }) => ({
      trailersKey:key,
      name:name
    })
  );

    const ind  = trailers.length - 1
  // console.log(trailers[2].trailersKey)
  return trailers[ind]

}