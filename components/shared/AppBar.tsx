import {Box, Text, StatusBar} from "native-base";

export default function AppBar() {
    return (
        <Box safeAreaTop backgroundColor="red.800" padding={3}>
            <StatusBar backgroundColor="red.800" barStyle="light-content"/>
            <Text color="white" fontSize="20" fontWeight="semibold">
                Beer of Tomorrow
            </Text>
        </Box>
    )
}
