import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import CardContainer from './CardContainer'
import Nav from './Nav'
import Container from './useableComponents.js/Container'
import ShoppingCartContainer from './ShoppingCartContainer'




const Hero = () => {
    const [totalPrice, setTotalPrice] = useState(0)
    const [itemCount, setItemCount] = useState(0)
    const [cartItems, setCartItems] = useState([])
    const [hiddenMenu, setHiddenMenu] = useState(false)


    const updateCart = (shoeImg, shoePrice) => {

        setItemCount(prevCount => prevCount + 1)
        setTotalPrice(prevPrice => prevPrice + shoePrice)
        if (cartItems.find(item => item.img === shoeImg)) {
            const result = cartItems.find(item => item.img === shoeImg)
            result.cardCount++
            return
        }
        setCartItems(...cartItems,
            { img: shoeImg, price: shoePrice, id: uuidv4(), cartCount: 1 })

    }
    return (
        <section className="hero">
            <Nav />
            <Container>
                <CardContainer />
                <ShoppingCartContainer
                    hiddenMenu={hiddenMenu}
                    cartItem={cartItems}
                    totalPrice={totalPrice}
                    itemCount={itemCount} />


            </Container>

        </section>
    )

}



export default Hero