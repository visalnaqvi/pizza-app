import { useAppContext } from "../context/appContext"
import { useState } from "react"

const PizzaTable = ()=>{
  const stages = ["Order Placed" , "Order in Making" , "Order Ready" , "Order Picked"]

    const {timeFromSec , pizzas , setPizzas} = useAppContext()

    const [cancelled , setCancelled] =  useState([]);
    const handleCancel = (id)=>{
        setCancelled([...cancelled , id])
        setPizzas(pizzas.filter(pizza=>pizza.id != id))
      }
    return(
        <table>
          <thead>
        <tr className='head'>
          <td>Order Id</td>
          <td>Stage</td>
          <td>Total time spent (time from order placed)</td>
          <td>Other Info</td>
          <td>Action</td>
        </tr>
        </thead>
        <tbody>
        {
          pizzas.map((pizza)=>(
            pizza.stage !== 3 && <tr key={pizza.id}>
              <td>{pizza.id}</td>
              <td>{stages[pizza.stage]}</td>
              <td>{timeFromSec(pizza.totalTime)}</td>
              <td>Type: {pizza.type}<br></br>Size: {pizza.size}<br></br>Base: {pizza.base}</td>
              <td>
                <button onClick={()=>{handleCancel(pizza.id)}}>Cancel</button>
              </td>
            </tr>
          ))
        }
   
        <tr className='info'>
          <td>Total order delivered (id)</td>
          <td colSpan={4}>
            {
              pizzas.map((pizza)=>(
                pizza.stage==3 && <span key={pizza.id}>{pizza.id} , </span>
              ))
            }
          </td>
        </tr>
        <tr className='info'>
          <td>Cancelled order ids</td>
          <td colSpan={4}>
            {
              cancelled.map((id)=>(<span key={id}>{id} , </span>))
            }
          </td>
        </tr>
        </tbody>
    </table>
    )
}

export default PizzaTable;