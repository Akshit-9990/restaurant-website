import React, { useState } from 'react'
import "./style.css";
import Menu from './menuApi';
import MenuCard from "./Basics/MenuCard";
import Navbar from './Basics/Navbar';

const uniqueList = [
    ...new Set(Menu.map((currElem) => {
        return currElem.category;
    })),
    "All",
];
console.log(uniqueList);
const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setmenuList] = useState(uniqueList);
    const filterItem = (category) => {
        if (category === "All") {
            setMenuData(Menu);
            return;
        }
        const updateList = Menu.filter((currElem) => {
            return currElem.category === category;
        })
        setMenuData(updateList);
    };
    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    );
};

export default Restaurant