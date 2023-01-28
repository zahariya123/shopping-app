import React from 'react'
import  Announcement  from "../components/Announcement"
import Categories from '../components/Categories'
import Products from '../components/Products'
import Slider from '../components/Slider'
import Footer from "../components/Footer";
import Newsletter from "../components/Newletter";

const Home = () => {
  return (
    <div>  
      <Announcement/>            
        <Slider/>
        <Categories/>
        <Products/>
        <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home