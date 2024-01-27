import { useAppContext } from "../context/appContext"

const NavBar = ()=>{

    const {setisFormVisible} = useAppContext()
    return(
        <div className="navbar">
            <h1>Pizza App</h1>
                <button onClick={()=>{setisFormVisible(true)}}>New Order</button>
        </div>
    )
}

export default NavBar