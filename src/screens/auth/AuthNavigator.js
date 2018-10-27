import {createStackNavigator} from "react-navigation";
import transitionConfig from "../../library/utils/transitionConfig";
import AuthScreen from "./AuthScreen";
import { AUTH_ROUTE } from "../../constants";
import SignInScreen from "./SignInScreen";

const AuthNavigator = createStackNavigator({
    AuthScreen: {screen: AuthScreen},
    SignInScreen: {screen: SignInScreen},
    },
    {
        headerMode: "float",
        transitionConfig,
        navigationOptions: {
            gesturesEnabled: true,
            gestureResponseDistance: {horizontal: 600}
        },
        initialRouteName: AUTH_ROUTE,
    });

export default AuthNavigator;