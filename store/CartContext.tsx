import {createContext, useState} from "react";

export type CartItemType = {
    product: Beer,
    quantity: number,
}

type CartContextType = {
    cartItems: CartItemType[],
    addOrUpdateItem: (product: Beer, quantity: number) => void
    removeItem: (id: number) => void
}

export const CartContext = createContext<CartContextType>({
    cartItems: [],
    addOrUpdateItem: () => {
    },
    removeItem: () => {
    },
})

type CartContextProviderProps = {
    children?: any
}

function CartContextProvider(props: CartContextProviderProps) {
    const [cartItems, setCartItems] = useState<CartItemType[]>([])

    const addOrUpdateItem = (product: Beer, quantity: number) => {
        const previousItem = cartItems.find(item => item.product.id === product.id)
        //  Update the item quantity
        if (previousItem) {
            previousItem.quantity = quantity || 1
            const items = [...cartItems]
            setCartItems(items)
            return
        }
        //  Add new item to cart
        setCartItems(prevState => [...prevState, {product, quantity: quantity || 1}])
    }

    const removeItem = (id: number) => {
        setCartItems(prevState => prevState.filter(item => item.product.id !== id))
    }

    const contextValue = {
        cartItems,
        addOrUpdateItem,
        removeItem
    }

    return <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>
}

export default CartContextProvider