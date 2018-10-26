import {createStackNavigator} from "react-navigation";
import transitionConfig from "../../library/utils/transitionConfig";
import LogInScreen from "../../screens/auth/AuthScreen";


const AuthNavigator = createStackNavigator({
        LogInScreen: {screen: LogInScreen},
        
    },
    {
        headerMode: "float",
        transitionConfig,
        navigationOptions: {
            gesturesEnabled: true,
            gestureResponseDistance: {horizontal: 200}
        },
        initialRouteName: "LogInScreen",
    });

export default AuthNavigator;