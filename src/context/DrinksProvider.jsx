import { useState, useEffect, createContext } from "react";
import axios from "axios";

const DrinksContext = createContext()

const DrinksProvider = ({children}) => {
    const [ drinks, setDrinks] = useState([])
    const [modal, setModal] = useState(false)
    const [drinkId, setDrinkId] = useState('')
    const [recipe, setRecipe] = useState({})
    const [load, setLoad] = useState(false)

    const getRecipe = async () => {
            if(!drinkId ) return

            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
                const {data} = await axios(url)
                setRecipe(data.drinks[0])
            } catch (error) {
                console.error(error)
            } finally {
                setLoad(false)
            }
}
    useEffect(() => {
        setLoad(true)
        getRecipe()
        
    }, [drinkId])

    const askDrink = async datas => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datas.name}&c=${datas.category}`

            const {data} = await axios(url)
            setDrinks(data.drinks)

        } catch (error) {
            console.error(error)
        }
    }

    const handleModalClick = () => {
        setModal(!modal)
    }
    const handleDrinkIdClick = id => {
        setDrinkId(id)
    }


    return(
        <DrinksContext.Provider
                value={{
                    askDrink,
                    drinks,
                    handleModalClick,
                    modal,
                    handleDrinkIdClick,
                    recipe,
                    load
                }}
        >
            {children}
        </DrinksContext.Provider>
    )
}

export {
    DrinksProvider
}

export default DrinksContext