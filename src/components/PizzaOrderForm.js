import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/appContext';

const PizzaOrderForm = () => {

  const {setPizzas , setisFormVisible , isFormVisible } = useAppContext()
  const [nextId , setNextId] = useState(1);

  const initailPizzaState = {
    id: nextId,
    stage:0,
    time:0,
    totalTime:0,
    type:"Veg",
    size:"Small",
    base:"Thin",
  }
  const [pizzaInfo , setPizzaInfo] = useState(initailPizzaState)

  const handleChange = (e) => {
    setPizzaInfo({...pizzaInfo , [e.target.name]:e.target.value})
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Pizza Type:', pizzaInfo);
    setPizzas((prev)=>[...prev , pizzaInfo])
    setNextId(nextId+1)
    setisFormVisible(false)
  };

  useEffect(()=>{
    setPizzaInfo(initailPizzaState)
  },[nextId])
  return (<>
  {
    isFormVisible &&  <div className='pizza-form'>
    <div className='form-wrapper'>
      <h2>Customize Your Pizza</h2>
      <br></br>
      <form onSubmit={handleSubmit}>
        <h3>Pizza Type</h3>
        <div className='row'>
          <label>
            <input
              type="radio"
              value="Veg"
              checked={pizzaInfo.type === 'Veg'}
              name="type"
              onChange={(e)=>handleChange(e)}
            />
            Veg
          </label>
          <label>
            <input
              type="radio"
              value="Non-Veg"
              name="type"
              checked={pizzaInfo.type === 'Non-Veg'}
              onChange={(e)=>handleChange(e)}
            />
            Non-Veg
          </label>
        </div>
        <br></br>
        <h3>Pizza Size</h3>
        <div className='row'>
          <label>
            <input
              type="radio"
              value="Large"
              name='size'
              checked={pizzaInfo.size === 'Large'}
              onChange={(e)=>handleChange(e)}
            />
            Large
          </label>
          <label>
            <input
              type="radio"
              value="Medium"
              name='size'
              checked={pizzaInfo.size === 'Medium'}
              onChange={(e)=>handleChange(e)}
            />
            Medium
          </label>
          <label>
            <input
              type="radio"
              value="Small"
              name='size'
              checked={pizzaInfo.size === 'Small'}
              onChange={(e)=>handleChange(e)}
            />
            Small
          </label>
        </div>
<br></br>
        <h3>Pizza Base</h3>
        <div className='row'>
          <label>
            <input
              type="radio"
              value="Thin"
              name='base'
              checked={pizzaInfo.base === 'Thin'}
              onChange={(e)=>handleChange(e)}
            />
            Thin
          </label>
          <label>
            <input
              type="radio"
              value="Thick"
              name='base'
              checked={pizzaInfo.base === 'Thick'}
              onChange={(e)=>handleChange(e)}
            />
            Thick
          </label>
        </div>

        <button type="submit">Place Order</button>
        <button style={{marginLeft:"10px"}} onClick={(e)=>{
          e.preventDefault()
          setisFormVisible(false)
        }}>Cancel</button>
      </form>
    </div>
    </div>
  }
   
    </>
  );
};

export default PizzaOrderForm;
