import {Box, Heading, HStack, ScrollView, Text} from "native-base";
import {useContext} from "react";
import {CartContext} from "../store/CartContext";
import CartItem from "../components/cart/CartItem";

export default function CartScreen() {
    const {cartItems} = useContext(CartContext)

    if (!cartItems.length) {
        return (
            <Box paddingX={4} paddingTop={8}>
                <Heading textAlign="center" size="md">
                    Your Shopping Cart is Empty
                </Heading>
                <Text marginTop={4} paddingX={2} textAlign="center">
                    Looks like you haven't made your choice yet! Browse through our products and add your favorites to
                    the cart.
                </Text>
            </Box>
        )
    }

    const totalAmount = cartItems.reduce((accumulator, currentValue) => accumulator + currentValue.product.abv * currentValue.quantity, 0)

    return (
        <ScrollView>
            {cartItems.map(item => <CartItem key={item.product.id} item={item}/>)}
            <Box paddingX={4} marginTop={6}>
                <Heading size="sm" fontWeight="semibold">
                    Order details
                </Heading>
                <HStack marginTop={2} paddingX={2} justifyContent="space-between" alignItems="center">
                    <Text fontSize={16} fontWeight="bold">
                        Total
                    </Text>
                    <Text fontSize={20} fontWeight="semibold">
                        ${totalAmount.toFixed(2)}
                    </Text>
                </HStack>
            </Box>
        </ScrollView>
    )
}