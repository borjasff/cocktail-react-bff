import { Row } from "react-bootstrap"
import useDrinks from "../hooks/useDrinks"
import Drink from "./Drink"

export default function DrinksList() {
    const { drinks } = useDrinks()
  return (
    <Row className="mt-5">
        {drinks && drinks.map(drink =>(
          
            <Drink
                
                key={drink.idDrink}
                drink={drink}
            />
            ))}
    </Row>
  )
}
