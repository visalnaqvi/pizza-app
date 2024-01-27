import { useAppContext } from "../context/appContext";

const StageDisplay = () => {

    const {timeFromSec , setisFormVisible , setPizzas , pizzas} = useAppContext()

    const makingTime = {
        Small: 180,
        Medium: 240,
        Large: 300
    }

    const nextStage = (id) => {
        setPizzas((prevPizzas) =>
            prevPizzas.map((pizza) =>
                pizza.id === id
                    ? {
                        ...pizza,
                        stage: pizza.stage + 1,
                        time: pizza.stage !== 3 ? 0 : pizza.time,
                    }
                    : pizza
            )
        );
    };
    return (
        <>
            {pizzas.length == 0 ? 
      <div className='main-wrapper'>
        <button onClick={()=>setisFormVisible(true)}>Add New Order</button>
      </div> :
         <div className='main-wrapper'>
         <div className='section'>
             <h2>Order Placed</h2>
             {pizzas.map(
                 (pizza) =>
                     pizza.stage === 0 && (
                         <div key={pizza.id} className={`card ${pizza.time >= makingTime[pizza.size] && 'warning'}`}>
                             <h3>Pizza {pizza.id}</h3>
                             <p>Size: {pizza.size}</p>
                             <p>Max Waiting Time: {timeFromSec(makingTime[pizza.size])}</p>
                             <p>Time: {timeFromSec(pizza.time)}</p>
                             <button onClick={() => nextStage(pizza.id)}>Next</button>
                         </div>
                     )
             )}
         </div>
         <div className='section'>
             <h2>Order in Making</h2>
             {pizzas.map(
                 (pizza) =>
                     pizza.stage === 1 && (
                         <div key={pizza.id} className={`card ${pizza.time >= makingTime[pizza.size] && 'warning'}`}>
                             <h3>Pizza {pizza.id}</h3>
                             <p>Size: {pizza.size}</p>
                             <p>Max Waiting Time: {timeFromSec(makingTime[pizza.size])}</p>
                             <p>Time: {timeFromSec(pizza.time)}</p>
                             {pizza.stage !== 'Order Ready' && (
                                 <button onClick={() => nextStage(pizza.id)}>Next</button>
                             )}
                         </div>
                     )
             )}
         </div>
         <div className='section'>
             <h2>Order Ready</h2>
             {pizzas.map(
                 (pizza) =>
                     pizza.stage === 2 && (
                         <div key={pizza.id} className={`card ${pizza.time >= makingTime[pizza.size] && 'warning'}`}>
                             <h3>Pizza {pizza.id}</h3>
                             <p>Size: {pizza.size}</p>
                             <p>Max Waiting Time: {timeFromSec(makingTime[pizza.size])}</p>
                             <p>Time: {timeFromSec(pizza.time)}</p>
                             {pizza.stage !== 'Order Ready' && (
                                 <button onClick={() => nextStage(pizza.id)}>Next</button>
                             )}
                         </div>
                     )
             )}
         </div>
         <div className='section'>
             <h2>Order Picked</h2>
             {pizzas.map(
                 (pizza) =>
                     pizza.stage === 3 && (
                         <div key={pizza.id} className={`card`}>
                             <h3>Pizza {pizza.id}</h3>
                             <p>picked</p>
                         </div>
                     )
             )}
         </div>
     </div>
      }
        </>
       
    )
}

export default StageDisplay;