import React from 'react'
import Footer from '../components/Footer'
import MainNavBar from '../components/MainNavBar'
import MainSection from '../components/MainSection'
import TopHeader from '../components/TopHeader'
import TopNavBar from '../components/TopNavBar'

const Home = () => {
  return (
    <>
        <TopNavBar></TopNavBar>
        <div className='container'>
        <MainNavBar></MainNavBar>
        <TopHeader></TopHeader>
        <MainSection></MainSection>
        </div>
        <Footer></Footer>
    </>
  )
}

export default Home