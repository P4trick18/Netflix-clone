import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as ApiTmbService from '../../services/apiTmdb'
import Title from '../../components/atoms/Title'
import List from '../../components/molecules/List'

function Catalog() {
  const navigate = useNavigate()
  const [popularMovies, setPopularMovies] = useState<string[]>([])
  const [topRatedMovies, setTopRatedMovies] = useState<string[]>([])
  const [upComingMovies, setUpcoming] = useState<string[]>([])


  const imgUrl = 'https://image.tmdb.org/t/p/w300'

  function sendToMovie(id:number) {
    navigate('/filme/' + id)
  }

  useEffect(() => {
    function searchPopular() {
      ApiTmbService.getPolular()
        .then((response) => {
          const novaResposta = response.results
  
          const novoObjeto = {
            poster_path: 'Leandro'
          }
  
          novaResposta.push(novoObjeto)
  
          const movieImgs = response.results.map((result) => {
            return imgUrl + result.poster_path
          })
          console.log(movieImgs)
          setPopularMovies(movieImgs)
        })
    }

    function searchTopRated() {
      ApiTmbService.getTopRated()
        .then((response) => {
          const novaResposta = response.results
  
          const novoObjeto = {
            poster_path: 'Leandro'
          }
  
          novaResposta.push(novoObjeto)
  
          const movieImgs = response.results.map((result) => {
            return imgUrl + result.poster_path
          })
          console.log(movieImgs)
          setTopRatedMovies(movieImgs)
        })
    }
    function searchUpcoming() {
      ApiTmbService.getUpcoming()
        .then((response) => {
          const novaResposta = response.results
  
          const novoObjeto = {
            poster_path: 'Leandro'
          }
  
          novaResposta.push(novoObjeto)
  
          const movieImgs = response.results.map((result) => {
            return imgUrl + result.poster_path
          })
          console.log(movieImgs)
          setUpcoming(movieImgs)
        })
    }


    searchPopular()
    searchTopRated()
    searchUpcoming()
  }, [])

  return <>
    <Title>Catalogo</Title>
    <List title='Populares'  moviesImg={popularMovies} />
    <List title='Top Assistidos' moviesImg={topRatedMovies} />
    <List title='Proximos filmes' moviesImg={upComingMovies} />
    <button type='button' onClick={() => sendToMovie(438148)}>Minions 2</button>
    <button type='button' onClick={() => sendToMovie(1365)}>A ultima ceia</button>
    <button type='button' onClick={() => sendToMovie(9584)}>Comboio</button>
    <button type='button' onClick={() => sendToMovie(2125)}>Alianca mortal</button>
  </>
}

export default Catalog