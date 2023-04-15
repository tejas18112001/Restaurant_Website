
import React, { useState } from 'react';
import './style.css'
import Menu from './menuAPI.js';
import MenuCard from './MenuCard.js';
import Navbar from './Navbar';


const uniqueList = [
  ...new Set(Menu.map((item) => {
    return item.category;
  })
  ),
  "All"
]
// console.log(uniqueList);
const Resturant = () => {

  // first component is  
  //    [state_variable , updateFunction] 
  //
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);
  const f = { color: "red" };



  const filterItem = (category) => {

    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    // else {

    const updatedList = Menu.filter((curElement) => {
      return curElement.category === category;
    })


    setMenuData(updatedList);
    // }

  };

  return (
    <>


      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>

  );
}

export default Resturant
