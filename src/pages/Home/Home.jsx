import React from 'react'
import Banner from './Banner'
import './home.css'
import About from './About'
import ClientReview from './ClientReview'
import Offer from './Offer'
import HomeMenu from './HomeMenu'
import PopularItem from './PopularItem'
import FindMeBar from '../../components/FindMeBar/FindMeBar'

const Home = () => {
  return (
    <>
    <FindMeBar />
    <Banner />
    <HomeMenu />
    <PopularItem />
    <About />
    <ClientReview />
    {/* <Offer /> */}
    </>
  )
}

export default Home
