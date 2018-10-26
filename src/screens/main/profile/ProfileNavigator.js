import {createStackNavigator} from "react-navigation";
import transitionConfig from "../../../library/utils/transitionConfig";
import ProfileScreen from "./ProfileScreen";

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
        initialRouteName: "ProfileScreen",
    });

export default ProfileNavigator;