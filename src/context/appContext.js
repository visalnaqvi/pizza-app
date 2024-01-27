import { createContext , useContext , useState , useEffect } from "react";

const AppContext = createContext();

export const AppContextProvider = ({children})=>{
    const [pizzas, setPizzas] = useState([
        // { id: 2, stage: 0, time: 0 , size:"medium" , totalTime:0}
    ]);

    const [isFormVisible , setisFormVisible] =  useState(false);
    
    const timeFromSec = (seconds)=>{
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPizzas((prevPizzas) =>
        prevPizzas.map((pizza) =>
          pizza.stage !== 3
            ? { ...pizza, time: pizza.time + 1 , totalTime:pizza.totalTime+1 }
            : pizza
        )
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);



    return(
        <AppContext.Provider value={{timeFromSec , 
                                    pizzas ,
                                    setPizzas,
                                    setisFormVisible,
                                    isFormVisible}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)