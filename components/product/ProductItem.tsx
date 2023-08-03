import {Box, Heading, HStack, Pressable, Text} from "native-base";
import QuantityInput from "../shared/QuantityInput";
import {useContext} from "react";
import {CartContext} from "../../store/CartContext";
import debounce from "lodash.debounce";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {NativeStackNavigation} from "../../types/NativeStackNavigation";
import {PRODUCT_DETAILS_SCREEN} from "../../constants/screens";
import ProductImage from "./ProductImage";

type ProductItemProps = {
    product: Beer,
}

export default function ProductItem(props: ProductItemProps) {
    const {addOrUpdateItem} = useContext(CartContext)
    const navigation = useNavigation<NativeStackNavigationProp<NativeStackNavigation>>()

    const addOrUpdateCartItem = debounce(addOrUpdateItem, 400)
    const onQuantityChange = (quantity: number) => {
        addOrUpdateCartItem(props.product, quantity)
    }

    const openProductDetails = () => {
        navigation.navigate(PRODUCT_DETAILS_SCREEN, {product: props.product})
    }

    return (
        <Pressable onPress={openProductDetails}>
            {({isPressed}) => (
                <Box
                    position="relative"
                    justifyContent="flex-end"
                    flex={1}
                    height={40}
                    paddingX={3}
                    marginTop={2}
                    style={{
                        transform: [
                            {scale: isPressed ? 0.95 : 1}
                        ]
                    }}
                >
                    <Box backgroundColor="red.800" minHeight={32} width="100%" padding={2} paddingLeft="168px"
                         borderRadius={8}>
                        <Heading color="white" size="sm" numberOfLines={1}>{props.product.name}</Heading>
                        <Text marginTop={1} color="white" numberOfLines={1}>{props.product.tagline}</Text>
                        <Text marginTop={1} color="white" fontSize="lg"
                              fontWeight="semibold">${props.product.abv}</Text>
                        <HStack justifyContent="flex-end" marginTop={2}>
                            <QuantityInput value={1} onChange={onQuantityChange}/>
                        </HStack>
                    </Box>
                    <ProductImage
                        position="absolute"
                        left={6}
                        bottom={2}
                        ratio={1}
                        height="144px"
                        shadow={5}
                        imageUrl={props.product.image_url}
                        alt={props.product.name || 'Beer Image'}
                    />
                </Box>
            )}
        </Pressable>
    )
}