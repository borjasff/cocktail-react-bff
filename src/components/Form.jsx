import { useState } from "react"
import { Button, Form, Row, Col, Alert } from "react-bootstrap"
import useCategories from "../hooks/useCategories"
import useDrinks from "../hooks/useDrinks"


export default function FormComponent() {

    const [ findDrink, setFinfDrink] = useState({
        name: "",
        category: ""
    })
    const [ alert, setAlert] = useState('')
    const {categories} = useCategories()
    const { askDrink } = useDrinks()

    const handleSubmit = e => {
        e.preventDefault()
        if(Object.values(findDrink).includes('')){
            setAlert('Error, All fields are required')
            setTimeout(() => {
                setAlert('')
            }, 4000);
        }
        setAlert('')
        askDrink(findDrink)
    }

  return (
    <Form
        onSubmit={handleSubmit}
    >

        {alert && <Alert variant="danger">{alert}</Alert>}
        <Row>
            <Col md={6}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="name">Drink Name</Form.Label>

                    <Form.Control
                            id="name"
                            type="text"
                            placeholder="Ex: Tequila, Vodza, etc"
                            name="name"
                            value={findDrink.name}
                            onChange={e => setFinfDrink({
                                ...findDrink,
                                [e.target.name] : e.target.value
                            })}
                            />
                </Form.Group>
            </Col>
            <Col md={6}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="category">Drink Category</Form.Label>
                    <Form.Select
                                id="category"
                                name="category"
                                value={findDrink.category}
                                onChange={e => setFinfDrink({
                                    ...findDrink,
                                    [e.target.name] : e.target.value
                                })}
                                >
                        <option>--Select Category--</option>
                        {categories.map(category => (
                            <option 
                            key={category.strCategory}
                            value={category.strCategory}
                        >{category.strCategory}</option>
                        ))}
                    </Form.Select>    
                </Form.Group>
            </Col>
        </Row>
        <Row className="justify-content-end">
            <Col md={3}>
                <Button
                        variant="danger"
                        className="text-uppercase w-100"
                        type="submit"
                        >
                    Find Drinks
                </Button>
            </Col>
        </Row>
    </Form>
  )
}
