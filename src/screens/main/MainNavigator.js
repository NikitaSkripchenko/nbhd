import React from 'react';
import {createStackNavigator} from "react-navigation";
import transitionConfig from "../../library/utils/transitionConfig";
import TabNavigator from "./TabNavigator";

import { MAIN_ROUTE } from "../../constants";
import colors from "../../assets/colors/colors";

const MainNavigator = createStackNavigator({
        TabNavigator: {screen: TabNavigator, navigationOptions: {
                headerStyle: {
                    backgroundColor: colors.KS_Green
                },
                header: null
            }},
       
    },
    {
        headerMode: "float",
        transitionConfig,
        navigationOptions: {
            gesturesEnabled: true,
            gestureResponseDistance: {horizontal: 200}
        },
        initialRouteName: MAIN_ROUTE,
    });

export default MainNavigator;