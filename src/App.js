import React from "react";
import { useState, useEffect } from "react";
import { MenuData } from "./components/MenuData";
import Button from "./components/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Search from "./components/Search";
import Modal from "./components/Modal"

const App = () => {
  const menuData = MenuData
  const [menuItems, setMenu] = useState(menuData);
  const [result, setResult] = useState(menuData);
  const [isModal, setIsModal] = useState(false)
  const [selectedMeal, setSelectedMeal] = useState('')
  
// const handleFilter = (category) => {
//   if(category === 'all'){
//     setFilteredData(menuData)
//   }else{
//     setFilteredData(menuData.filter(item=> item.category === category))
//   }
// }
      const getAllMeals = () => {
        setResult(menuItems)
      }

  const toggleModal = () => {
    setIsModal(!isModal)
  }
  
  const openModal = (meal) => {
    setSelectedMeal(meal);
    toggleModal();
  }
  const submitForm = (event) => {
    event.preventDefault();
    setMenu(menuItems)
  }

  const getMeal = (value) => {
    const resultOfSearch = menuData.filter(item =>item.title.includes(value)); setResult(resultOfSearch)
  }

  const getBreakfast = () => {
    const breakfastMenu = menuItems.filter(item => item.category === "breakfast");
    setResult(breakfastMenu)
  }

  const getLunch = () => {
    const lunchMenu = menuItems.filter(item => item.category === "lunch");
    setResult(lunchMenu)
  }

  const getShakes = () => {
    const shakesMenu = menuItems.filter(item => item.category === "shakes");
    setResult(shakesMenu)
  }

  const getDinner = () => {
    const dinnerMenu = menuItems.filter(item => item.category === "dinner");
    setResult(dinnerMenu)
  }

  return(
    <div className="container">
    <h2>Our Menu</h2>
    <Search 
      submitForm={submitForm}
      getMeal={getMeal}/>
  
    <Button 
      getAllMeals={getAllMeals} getBreakfast={getBreakfast} getLunch={getLunch} getShakes={getShakes} getDinner={getDinner}/>

    <Modal toggleModal={toggleModal} openModal={openModal} isModal={isModal} selectedMeal={selectedMeal}/>
    
    <div className="containerForMeals">
      {result.map(item => (
        <div key={item.id} className="menu-item">
        <img src={`./images/item-${item.id}.jpeg` }/>
          <div className="menu-item-info">
            <div className="titleAndPrice">
            <h5>{item.title}</h5>
            <h6>{item.price}</h6>
            </div>
             <p>{item.desc}</p>
             <button className="showMoreBtn" onClick={() => {toggleModal(); {openModal()}}}>Learn more about ingredients</button>
           </div>
           </div>
           ))}
      </div>
  </div>
)
      }     
export default App;