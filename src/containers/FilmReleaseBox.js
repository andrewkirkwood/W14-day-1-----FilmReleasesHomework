import React, {Component} from 'react'
import FilmReleaseList from '../components/FilmReleaseList'
import './FilmReleaseBox.css'

class FilmReleaseBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      films: [
        {
          id: 1,
          name: "Spider-Man: Into the Spider-Verse",
          url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
        },
        {
          id: 2,
          name: "Life Itself",
          url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
        },
        {
          id: 3,
          name: "Mary Queen of Scots",
          url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
        },
        {
          id: 4,
          name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
        },
        {
          id: 5,
          name: "Captain Marvel",
          url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
        }
      ]
    }
  }
  render(){
    return (
      <article>
        <h2> Film Release Box </h2>
        < FilmReleaseList films={this.state.films} />
        <a href="https://www.imdb.com/calendar/?region=gb">
          <h3>
            View More Upcoming Releases...
          </h3>
        </a>
      </article>
    )
  }
}

export default FilmReleaseBox
