import {Box, HStack, Text, VStack} from "native-base";
import QuantityInput from "../shared/QuantityInput";
import {useContext} from "react";
import {CartContext, CartItemType} from "../../store/CartContext";
import debounce from "lodash.debounce";
import ProductImage from "../product/ProductImage";

type ProductItemProps = {
    item: CartItemType,
}

export default function CartItem(props: ProductItemProps) {
    const {addOrUpdateItem, removeItem} = useContext(CartContext)

    const addOrUpdateCartItem = debounce(addOrUpdateItem, 400)
    const onQuantityChange = (value: number) => {
        if (value === 0) {
            addOrUpdateCartItem.cancel()
            removeItem(props.item.product.id)
            return
        }
        addOrUpdateCartItem(props.item.product, value)
    }

    return (
        <Box
            position="relative"
            paddingX={3}
            marginTop={6}
        >
            <HStack
                backgroundColor="red.800"
                width="100%"
                padding={2}
                borderRadius={8}
                justifyContent="space-between"
                alignItems="center"
            >
                <ProductImage
                    imageUrl={props.item.product.image_url}
                    alt={props.item.product.name || 'Beer Image'}
                    ratio={1}
                    height={12}
                />
                <HStack flex={1} justifyContent="space-between" paddingLeft={2}>
                    <VStack flex={1}>
                        <Text color="white" fontWeight="semibold" numberOfLines={1}>{props.item.product.name}</Text>
                        <Text color="white" marginTop={1}>
                            {props.item.quantity} x ${props.item.product.abv}
                        </Text>
                    </VStack>
                    <VStack flex={1} alignItems="flex-end" justifyContent="space-between">
                        <Text color="white" fontWeight="bold" fontSize={16}>
                            ${(props.item.quantity * props.item.product.abv).toFixed(2)}
                        </Text>
                        <QuantityInput
                            value={props.item.quantity}
                            minValue={0}
                            onChange={onQuantityChange}
                        />
                    </VStack>
                </HStack>
            </HStack>
        </Box>
    )
}