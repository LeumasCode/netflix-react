import React from 'react'
import Row from './Row';
import request from './request'

const App = () => {
  return (
    <div>
      <Row title='NETFLIX ORIGINALS' fetchUrl= {request.fetchNetflixOriginals} />
      <Row title='Trending Now' fetchUrl= {request.fetchTrending} />
    </div>
  )
}

export default App
