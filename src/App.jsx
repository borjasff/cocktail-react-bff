import { Container } from "react-bootstrap"
import FormComponent from "./components/Form"
import DrinksList from "./components/DrinksList"
import ModalDrink from "./components/ModalDrink"
import { CategoriesProvider } from "./context/CategoriesProvider"
import { DrinksProvider } from "./context/DrinksProvider"
import ErrorBoundary from './components/ErrorBoundary'


function App() {

  return (
    <ErrorBoundary>

        <CategoriesProvider>
            <DrinksProvider>

                  <header className="py-5">
                        <h1>Finder Drinks</h1>
                  </header>

                  <Container className="mt-5">
                        <FormComponent />
                        <DrinksList />
                        <ModalDrink />


                  </Container>

            </DrinksProvider>
        </CategoriesProvider>

    </ErrorBoundary>

  )
}

export default App
