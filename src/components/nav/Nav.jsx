import React from 'react'
import './nav.css'
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FiBook } from "react-icons/fi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

const Nav = () => {
  return (
   <nav>
    <a href="#"><AiOutlineHome /></a>
    <a href="#about"><AiOutlineUser /></a>
    <a href="#experience"><FiBook /></a>
    <a href="#services"><RiServiceLine /></a>
    <a href="#contact"><BiMessageSquareDetail /></a>
   </nav>
  )
}

export default Nav