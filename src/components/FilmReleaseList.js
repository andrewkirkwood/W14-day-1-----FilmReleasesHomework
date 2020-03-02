import React, {Component, Fragment} from 'react'
import Film from './Film'
import './FilmList.css'

function FilmReleaseList({films}){

  const filmComponents = films.map(film => {
    return (
      <Film
        key={film.id}
        url={film.url}
      >
        {film.name}
      </Film>
    )
  })
  return (
    <Fragment>
      <h3> Film Release List</h3>
      <ul className="films-list">
        {filmComponents}
      </ul>
    </Fragment>
  )

}

export default FilmReleaseList
