// import logo from './logo.svg';


import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes } from "react-router-dom";

import {  Header , MainContainer ,CreateContainer } from  "./comp";
function App() {
  return (
    <AnimatePresence exitBeforeEnter>

    <h1 className=" w-screen h-auto flex flex-col bg-primary">

    <Header />
    <main className="mt-16 md:mt-20 px-4 md:px-16 py-7  w-full"> 
    <Routes>
      <Route  path="/*" element={<MainContainer />}/>
      <Route  path="/createItem" element={<CreateContainer />}/>
      
    </Routes> </main>
  </h1>
  </AnimatePresence>
  );
}


export default App;

