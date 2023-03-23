import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Banner from "../images/banner.jpg"
import "../styles/HomeStyles.css"
const Home = () => {
  return (
    <Layout>
      <div className='home' style={{backgroundImage : `url(${Banner})`}}>
      <div className='headerContainer'>
        <h1>Food Website</h1>
        <p>
        Best Food in India 
        </p>
        <Link to ="/form">
          <button>
            Order Now
          </button>
        </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home
