import React from 'react'



const CardBg = ({ fruitImg }) => {
    return (
        <div className="cardBg">
            <img src={fruitImg} alt="fruit" />
        </div>
    )
}


export default CardBg