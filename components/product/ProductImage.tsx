import {AspectRatio, IAspectRatioProps, Image} from "native-base";

interface ProductImageProps extends IAspectRatioProps {
    imageUrl: string,
    alt: string
}

export default function ProductImage({imageUrl, alt, ...rest}: ProductImageProps) {
    return (
        <AspectRatio backgroundColor="gray.200" borderRadius={8} {...rest}>
            {
                imageUrl
                    ? <Image
                        source={{uri: imageUrl}}
                        alt={alt}
                        resizeMode="contain"
                        flex={1}
                    />
                    : null
            }
        </AspectRatio>
    )
}