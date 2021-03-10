import React from 'react'
import Button from './useableComponents.js/Button'



const CardInfo = ({ fruitPrice, fruitName, updateCart }) => {
    return (
        <div className="cardInfo">
            <p>${fruitPrice}</p>
            
            <Button addItem={updateCart} />
        </div>
    )
}


export default CardInfo