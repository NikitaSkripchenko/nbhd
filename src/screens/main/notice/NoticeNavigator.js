import {createStackNavigator} from "react-navigation";

import transitionConfig from "../../../library/utils/transitionConfig";
import NoticeScreen from "./NoticeScreen";
import { NOTICE_ROUTE } from "../../../constants";

const NoticeNavigator = createStackNavigator({
        NoticeScreen: {screen: NoticeScreen},
    },
    {
        headerMode: "float",
        transitionConfig,
        navigationOptions: {
            gesturesEnabled: true,
            gestureResponseDistance: {horizontal: 200}
        },
        initialRouteName: NOTICE_ROUTE,
    });

export default NoticeNavigator;