import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import * as ApiTmbService from '../../services/apiTmdb'
import MovieInterface from "../../models/interfaces/Movie";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieInterface>()

  const imgUrl = 'https://image.tmdb.org/t/p/w300'

  useEffect(() => {
    if (!id || movie) return
    ApiTmbService.getMovieDetails(+id)
      .then((response) => {
        setMovie(response)
      })
  }, [id, movie])

  return <>
  
    <h1>{movie && movie.title}</h1>
    {movie && movie.backdrop_path && (
      <img src={imgUrl + movie.backdrop_path} alt="" />
    )}
  </>
}

export default Movie