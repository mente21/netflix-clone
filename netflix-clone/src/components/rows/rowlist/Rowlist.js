import React from 'react'
import Row from '../row/Row'
import axios from '../../utils/Axios'
import requests from '../../utils/requests'


export default function Rowlist() {
  return (
    <div>
        <Row fecheddata={requests.fetchNetflixOriginals} title="Netflix Originals" />
        <Row fecheddata={requests.fetchTrending} title="Trending Now" />
        <Row fecheddata={requests.fetchTopRated} title="Top Rated" />
        <Row fecheddata={requests.fetchActionMovies} title="Action Movies" />   
        <Row fecheddata={requests.fetchComedyMovies} title="Comedy Movies" />
        <Row fecheddata={requests.fetchHorrorMovies} title="Horror Movies" />
                <Row fecheddata={requests.fechTvshows} title="Tv Shows" />

    </div>
  )
}
