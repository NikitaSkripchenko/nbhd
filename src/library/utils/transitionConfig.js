import {Easing, Animated} from "react-native";

const TransitionConfiguration = () => {
    return {
        transitionSpec: {
            duration: 300,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true,
        },
        screenInterpolator: (sceneProps) => {
            const { layout, position, scene } = sceneProps;
            const width = layout.initWidth;
            const { index, route } = scene;
            const params = route.params || {};
            const transition = params.transition || 'default';
            return {
                default: SlideFromRight(index, position, width),
            }[transition];
        },
    }
};


let SlideFromRight = (index, position, width) => {
    const inputRange = [index - 1, index, index + 1];
    const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [width, 0, 0]
    })
    const slideFromRight = { transform: [{ translateX }] };
    return slideFromRight
};


export default TransitionConfiguration