import React, { useState, useEffect } from 'react'
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
    // const [searchTerm, setSearchTerm] = useState('')
    // const [shoeList, setShoeList] = useState([])
    // const [filteredShoeList, setFilteredShoeList] = useState([])


    // useEffect(() => {
    //     async function pullData() {
    //         const shoes = await retrieveShoes()
    //         setShoeList(shoes)
    //         setFilteredShoeList(shoes)
    //     }
    //     pullData()
    // }, [])
    // useEffect(() => {
    //     const filtered = filterShoes(shoeList, searchTerm)

    //     setFilteredShoeList(filtered)
    // }, [searchTerm, shoeList])


    const updateCart = (fruitImg, fruitPrice) => {

        setItemCount(prevCount => prevCount + 1)
        setTotalPrice(prevPrice => prevPrice + fruitPrice)
        if (cartItems.find(item => item.img === fruitImg)) {
            const result = cartItems.find((item) => item.img === fruitImg)
            result.cartCount++
            return

        }

        setCartItems([
            ...cartItems,
            { img: fruitImg, price: fruitPrice, id: uuidv4(), cartCount: 1 }

        ])
    }
    const removeItem = (id) => {
        const newItems = cartItems.filter((cartItems) => cartItems.id !== id)
        setCartItems(newItems)

        const itemCountResult = newItems.reduce(
            (acc, val) => (acc += val.cartCount), 0
        )
        setItemCount(itemCountResult)

        const priceResult = newItems.reduce(
            (acc, val) => (acc += val.price * val.cartCount), 0
        )
        setTotalPrice(priceResult)
    }
    return (
        <section className="hero">
            <Nav
                itemCount={itemCount}
                hiddenMenu={hiddenMenu}
                setHiddenMenu={setHiddenMenu} />


            <Container>
                <CardContainer updateCart={updateCart} />
                <ShoppingCartContainer
                    hiddenMenu={hiddenMenu}
                    cartItems={cartItems}
                    totalPrice={totalPrice}
                    itemCount={itemCount}
                    removeItem={removeItem} />


            </Container>

        </section>
    )

}



export default Hero