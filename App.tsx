import {NativeBaseProvider} from "native-base";
import {createNativeStackNavigator, NativeStackNavigationOptions} from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import {NavigationContainer} from "@react-navigation/native";
import CartContextProvider from "./store/CartContext";
import AppBar from "./components/shared/AppBar";
import ShoppingCartButton from "./components/shared/ShoppingCartButton";
import CartScreen from "./screens/CartScreen";
import {CART_SCREEN, HOME_SCREEN, PRODUCT_DETAILS_SCREEN} from "./constants/screens";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {

    const screenNavigatorOptions: NativeStackNavigationOptions = {
        headerRight: () => (<ShoppingCartButton/>),
    }

    return (
        <CartContextProvider>
            <NativeBaseProvider>
                <AppBar/>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Group>
                            <Stack.Screen name={HOME_SCREEN} component={HomeScreen} options={screenNavigatorOptions}/>
                            <Stack.Screen name={CART_SCREEN} component={CartScreen}/>
                        </Stack.Group>
                        <Stack.Group screenOptions={{presentation: 'modal'}}>
                            <Stack.Screen name={PRODUCT_DETAILS_SCREEN} component={ProductDetailsScreen}/>
                        </Stack.Group>
                    </Stack.Navigator>
                </NavigationContainer>
            </NativeBaseProvider>
        </CartContextProvider>
    );
}
