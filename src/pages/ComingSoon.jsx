import React from 'react'
import NavBar from '../components/NavBar'
import { NavLink } from 'react-router-dom'

export default function Error404Page() {
  return (
    <>
      <NavBar />
      <div className="d-flex align-items-center justify-content-center mt-5">
        <div className="text-center">
          <h1 className="display-1 fw-bold">Coming Soon</h1>
          <NavLink to="/MainPlanner">
            <button className='btn btn-outline-primary btn-lg mt-3 me-2 mb-5'>All our Tools</button>
          </NavLink>
          <p className="lead">
            We are working hard to bring something amazing. Check back soon for updates!
          </p>
        </div>
      </div>
    </>
  )
}
