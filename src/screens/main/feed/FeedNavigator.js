import {createStackNavigator} from "react-navigation";

import transitionConfig from "../../../library/utils/transitionConfig";
import FeedScreen from "./FeedScreen";
import { FEED_ROUTE } from "../../../constants";


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
        initialRouteName: FEED_ROUTE,
    });

export default FeedNavigator;