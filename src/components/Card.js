import React from 'react'
import CardBg from './CardBg'
import CardInfo from './CardInfo'
import FruitData from './FruitData'


const Card = ({ updateCart, fruitName }) => {
    return (
        <>
            {FruitData.map((fruit, index) => (
                <div key={index} className="card">
                    <div className="fruitName">
                        <h5>{fruit.fruitName}</h5>
                    </div>
                    <CardBg fruitImg={fruit.cardImg} />
                    <CardInfo
                        fruitPrice={fruit.cardPrice}
                        updateCart={() => updateCart(fruit.cardImg, fruit.cardPrice)} />
                </div>
            ))}
        </>
    )
}

export default Card