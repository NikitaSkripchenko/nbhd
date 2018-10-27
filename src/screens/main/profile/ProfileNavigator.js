import {createStackNavigator} from "react-navigation";

import transitionConfig from "../../../library/utils/transitionConfig";
import ProfileScreen from "./ProfileScreen";
import { PROFILE_ROUTE } from "../../../constants";

const ProfileNavigator = createStackNavigator({
        ProfileScreen: {screen: ProfileScreen},
    },
    {
        headerMode: "float",
        transitionConfig,
        navigationOptions: {
            gesturesEnabled: true,
            gestureResponseDistance: {horizontal: 200}
        },
        initialRouteName: PROFILE_ROUTE,
    });

export default ProfileNavigator;