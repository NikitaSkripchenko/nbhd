import {createStackNavigator} from "react-navigation";

import transitionConfig from "../../../library/utils/transitionConfig";
import FeedScreen from "./FeedScreen";

const FeedNavigator = createStackNavigator({
        FeedScreen: {screen: FeedScreen},
    },
    {
        headerMode: "float",
        transitionConfig,
        navigationOptions: {
            gesturesEnabled: true,
            gestureResponseDistance: {horizontal: 200}
        },
        initialRouteName: "FeedScreen",
    });

export default FeedNavigator;