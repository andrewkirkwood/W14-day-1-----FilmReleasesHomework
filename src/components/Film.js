import React from 'react'

function Film({ url, children }){
  return (
    <li>
      <a href={url}>
      <h5> {children} </h5>
      </a>
    </li>
  )
}

export default Film
