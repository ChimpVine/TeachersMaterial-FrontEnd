import React from 'react'
import NavBar from '../components/NavBar'

export default function Error404Page() {
  return (
    <>
      <NavBar />
            <div className="d-flex align-items-center justify-content-center mt-5">
                <div className="text-center">
                    <h1 className="display-1 fw-bold">Coming Soon</h1>
                    <p className="fs-3"><span className="text-info">Stay Tuned!</span></p>
                    <p className="lead">
                        We are working hard to bring something amazing. Check back soon for updates!
                    </p>
                </div>
            </div>
    </>  
  )
}
