import {Box, IconButton, Input, AddIcon, MinusIcon, HStack, DeleteIcon} from "native-base";
import {useState} from "react";

type QuantityInputProps = {
    value?: number,
    minValue?: number,
    onChange?: (value: number) => void
}
export default function QuantityInput(props: QuantityInputProps) {
    const minValue: number = typeof props.minValue === 'undefined' ? 1 : props.minValue
    const [quantity, setQuantity] = useState(props.value || 1)

    const onChange = (value: number) => typeof props?.onChange === "function" && props.onChange(value)

    const onAddPress = () => {
        setQuantity(prevState => {
            const newState = prevState + 1
            onChange(newState)
            return newState
        })
    }

    const onMinusPress = () => {
        setQuantity(prevState => {
            const newState = prevState - 1 < minValue ? minValue : prevState - 1
            onChange(newState)
            return newState
        })
    }


    const minusIcon = props.minValue !== undefined && props.minValue <= 0 && quantity <= 1
        ? <DeleteIcon/>
        : <MinusIcon/>

    return (
        <Box justifyContent="center" alignItems="center">
            <HStack backgroundColor="white" borderRadius="full">
                <IconButton
                    icon={minusIcon}
                    variant="solid"
                    borderRadius="full"
                    backgroundColor="white"
                    size="sm"
                    disabled={quantity <= minValue}
                    _icon={{color: "red.800"}}
                    _hover={{bgColor: "red.800:alpha.20"}}
                    _pressed={{bgColor: "red.800:alpha.20"}}
                    _disabled={{
                        _icon: {
                            color: "red.800:alpha.20"
                        }
                    }}
                    onPress={onMinusPress}
                />
                <Input variant="unstyled" isReadOnly={true} value={quantity.toString()} textAlign="center"
                       width={12}/>
                <IconButton
                    icon={<AddIcon color="red.800"/>}
                    variant="solid"
                    borderRadius="full"
                    backgroundColor="white"
                    size="sm"
                    _icon={{
                        color: "red.800"
                    }}
                    _hover={{
                        bgColor: "red.800:alpha.20"
                    }}
                    _pressed={{
                        bgColor: "red.800:alpha.20"
                    }}
                    onPress={onAddPress}
                />
            </HStack>
        </Box>
    )
}
