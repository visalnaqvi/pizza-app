import { useAppContext } from "../context/appContext"
import { useEffect , useState } from "react"
const NavBar = ()=>{

    const {setisFormVisible , pizzas} = useAppContext()
    const [activeOrders , setActiveOrders] = useState(0)

    useEffect(()=>{
        const activeOrders = pizzas.filter(pizza => pizza.stage !== 3);
        setActiveOrders(activeOrders.length)
      },[pizzas])
    return(
        <div className="navbar">
            <h1>Pizza App</h1>
                {
                    activeOrders>=10 ? <button>Not Taking Orders</button> :
                    <button onClick={()=>{setisFormVisible(true)}}>New Order</button>

                }
        </div>
    )
}

export default NavBar