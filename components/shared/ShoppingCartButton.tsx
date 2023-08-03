import {Badge, Icon, IconButton, VStack} from "native-base";
import {AntDesign} from "@expo/vector-icons";
import {useContext} from "react";
import {CartContext} from "../../store/CartContext";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {NativeStackNavigation} from "../../types/NativeStackNavigation";
import {CART_SCREEN} from "../../constants/screens";

export default function ShoppingCartButton() {
    const {cartItems} = useContext(CartContext)
    const navigator = useNavigation<NativeStackNavigationProp<NativeStackNavigation>>()

    const navigateToCart = () => {
        navigator.navigate(CART_SCREEN)
    }
    return (
        <VStack>
            {cartItems?.length ?
                <Badge
                    colorScheme="danger"
                    rounded="full"
                    mb={-4}
                    mr={-4}
                    zIndex={1}
                    variant="solid"
                    alignSelf="flex-end"
                    paddingX={1}
                    backgroundColor="red.700"
                    _text={{fontSize: 10}}
                >
                    {cartItems.length}
                </Badge>
                : null
            }
            <IconButton
                icon={<Icon as={AntDesign} name="shoppingcart" color="black"/>}
                size="lg"
                padding={1}
                borderRadius="full"
                onPress={navigateToCart}
            />
        </VStack>
    )
}