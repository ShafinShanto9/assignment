import React from 'react'
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
    </>
  )
}

export default Home