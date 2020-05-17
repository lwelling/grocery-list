import React, { useState } from 'react';
import { Recipes } from './Recipes';
import { Button } from 'react-bootstrap';

function CrunchIngredients() {

    const [shoppingCart, setShoppingCart] = useState([])

    const handleClick = () => {
        return alert("Hey, this works!")
    }

    return (
        <Button onClick={handleClick} variant="primary">
            Crunch!
        </Button>
    )
};

export default CrunchIngredients;
