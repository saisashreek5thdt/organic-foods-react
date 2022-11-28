import React from 'react'

import { Backdrop, Header, Navbar, SidebarCategory, SidebarCart, SideNav, MobileMenu } from "../Components/index";

const Homepage = () => {
  return (
    <>
        <Backdrop />
        <Header />
        <Navbar />
        <SidebarCategory />
        <SidebarCart />
        <SideNav />
        <MobileMenu />
    </>
  )
}

export default Homepage