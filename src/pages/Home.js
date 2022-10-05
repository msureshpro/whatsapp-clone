import React from 'react'
import './Home.css'
import Chat from '../components/Chat'

function Home() {
  return (
    <div className="home__container">
      <div className="chat__container">
        <div className="chat__container__left">
          <Chat />
        </div>
      </div>
    </div>
  )
}

export default Home
