import {Box, Heading, HStack, Text, ChevronRightIcon, ScrollView, Divider} from "native-base";
import ProductImage from "../components/product/ProductImage";

export default function ProductDetailsScreen(props: any) {
    const product: Beer = props.route.params.product
    return (
        <ScrollView>
            <Box
                position="relative"
                paddingX={3}
                marginTop={2}
            >
                <Box paddingTop={6} paddingBottom={4} paddingLeft={32}>
                    <Heading size="md" color="red.800">{product.name}</Heading>
                </Box>
                <Box
                    backgroundColor="red.800"
                    width="100%"
                    minHeight={32}
                    padding={2}
                    paddingLeft={32}
                    borderRadius={8}
                >
                    <Text marginTop={1} color="white">
                        {product.tagline}
                    </Text>
                    <Text marginTop={1} color="white" fontSize="lg" fontWeight="semibold">
                        ${product.abv}
                    </Text>
                </Box>
                <ProductImage
                    imageUrl={product.image_url}
                    alt={product.name || 'Beer Image'}
                    ratio={9 / 16}
                    position="absolute"
                    left={6}
                    top={2}
                    width={24}
                    shadow={5}
                />
            </Box>
            <HStack justifyContent="center" marginTop={2}>
                <Text>
                    First Brewed: {product.first_brewed}
                </Text>
                <Divider marginX={2} orientation="vertical" thickness={2} backgroundColor="red.800"/>
                <Text>
                    PH {product.ph}
                </Text>
            </HStack>
            <Box
                position="relative"
                paddingX={3}
                marginTop={4}
            >
                <Heading size="sm">Description</Heading>
                <Text marginTop={2} textAlign="justify">
                    {product.description}
                </Text>
            </Box>
            <Box
                backgroundColor="red.800"
                borderRadius={8}
                position="relative"
                padding={4}
                marginTop={8}
                marginX={2}
            >
                <Heading size="sm" color="white">Food Pairing Suggestions</Heading>
                {(product.food_pairing || []).map(suggestion => (
                    <HStack marginTop={2} alignItems="center" key={suggestion}>
                        <ChevronRightIcon color="white"/>
                        <Text color="white">
                            {suggestion}
                        </Text>
                    </HStack>
                ))}
            </Box>
        </ScrollView>
    )
}