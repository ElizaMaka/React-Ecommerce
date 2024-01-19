import React, { useContext } from 'react'
import './menu.css'
import { JsonContext } from '../../context/JsonServerContext';
import HomeMenu from '../Home/HomeMenu';
import Category from '../../components/Category/Category';
import FindMeBar from '../../components/FindMeBar/FindMeBar';

const Menu = () => {
  const { categories } = useContext(JsonContext);

  return (
    <>
      <FindMeBar />
      <h1 style={{ textAlign: "center", margin: "50px 0" }}> Our Menu</h1>
      <Category categories={categories} />
    </>
  )
}

export default Menu

