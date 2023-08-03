import {Box, FlatList, Heading, HStack, Spinner, Text, VStack} from "native-base";
import ProductItem from "../components/product/ProductItem";
import {useEffect, useState} from "react";
import {ListRenderItem} from "react-native";

export default function HomeScreen() {
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([])

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const response = await fetch('https://api.punkapi.com/v2/beers', {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                });
                if (response.ok) {
                    setProducts(await response.json())
                }
            } finally {
                setIsLoading(false)
            }
        }
        loadProducts()
    }, [])

    if (isLoading) {
        return (
            <Box flex={1} justifyContent="flex-start" alignItems="center">
                <VStack marginTop={12} space={2} justifyContent="center">
                    <Spinner color="red.800" accessibilityLabel="Loading beers" size="lg"/>
                    <Heading color="red.800" fontSize="lg">
                        Loading
                    </Heading>
                </VStack>
            </Box>
        )
    }

    const renderItem: ListRenderItem<Beer> = ({item}) => <ProductItem product={item}/>

    return (
        <FlatList<Beer> data={products} renderItem={renderItem} keyExtractor={item => item.id.toString()}/>
    )
}