import {createSwitchNavigator} from "react-navigation";
import transitionConfig from "../library/utils/transitionConfig";

import AuthNavigator from "./auth/AuthNavigator";
import MainNavigator from "./main/MainNavigator";


const AppNavigator = createSwitchNavigator({
        AuthNavigator: {screen: AuthNavigator},
        MainNavigator: {screen: MainNavigator},

    },
    {
        transitionConfig,
        navigationOptions: {
            gesturesEnabled: true,
            gestureResponseDistance: {horizontal: 200}
        },
        initialRouteName: "AuthNavigator",
    });

export default AppNavigator;
