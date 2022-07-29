import React, { useEffect, useState, useRef } from 'react'
import * as ApiTmbService from '../../services/apiTmdb'

function Catalog() {
  const [popularMovies, setPopularMovies,] = useState([])

  const imgUrl = 'https://image.tmdb.org/t/p/w300'

  const testeRef = useRef()

  useEffect(() => {
    ApiTmbService.getPolular()
      .then((response) => setPopularMovies(response.results))
  }, [])

  return <>
    <h1>Catalogo</h1>
    <div className='categoria'>
      <h2 className='categoria-titulo'>Populares</h2>
      <div className='categoria-lista' ref={testeRef}>
      
      <button className='categoria-lista-meio' onClick={() => {
        testeRef.current.scrollBy({
          left: 600,
          bahavior: "smooth"
        });
      }}>teste3</button>
        <button className='categoria-lista-esquerda'onClick={() => {
          testeRef.current.scrollBy({
            left: -500,
            behavior: "smooth"
          });
        }}>teste</button>
        {
          popularMovies.map((popularMovie) => {
            return <>
              <img src={imgUrl + popularMovie.poster_path} alt={popularMovie.title} />
            </>
          })
        }
        <button className='categoria-lista-direita' onClick={() => {
          testeRef.current.scrollBy({
            left: 500,
            behavior: "smooth"
          });
        }}>teste2</button>
      </div>
    </div>
  </>
}

export default Catalog