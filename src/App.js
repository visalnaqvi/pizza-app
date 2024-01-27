import React from 'react';
import NavBar from "./components/NavBar.js"
import PizzaOrderForm from './components/PizzaOrderForm.js';
import StageDisplay from './components/StageDisplay.js';
import PizzaTable from './components/PizzaTable.js';
const PizzaApp = () => {

  return (
    <>

    <NavBar />
    <PizzaOrderForm />
      <StageDisplay />
      <PizzaTable/>
    </>
  );
};

export default PizzaApp;
