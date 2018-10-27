import {createStackNavigator} from "react-navigation";
import transitionConfig from "../../library/utils/transitionConfig";
import AuthScreen from "./AuthScreen";
import { AUTH_ROUTE } from "../../constants";

const AuthNavigator = createStackNavigator({
    AuthScreen: {screen: AuthScreen},
        
    },
    {
        headerMode: "float",
        transitionConfig,
        navigationOptions: {
            gesturesEnabled: true,
            gestureResponseDistance: {horizontal: 200}
        },
        initialRouteName: AUTH_ROUTE,
    });

export default AuthNavigator;