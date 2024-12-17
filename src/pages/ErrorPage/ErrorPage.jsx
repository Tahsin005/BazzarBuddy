import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
      Oops There seems to be an error.
      <Link to={'/'}></Link>
    </div>
  )
}

export default ErrorPage
