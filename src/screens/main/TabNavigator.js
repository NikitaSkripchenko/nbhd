import React from 'react';
import {createBottomTabNavigator} from "react-navigation";

import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from "../../assets/colors/colors";
import Profile from "./../main/profile/ProfileNavigator";
import Feed from "./../main/feed/FeedNavigator";
import Notice from "./../main/notice/NoticeNavigator";

const options = {
    activeTintColor: colors.orange,
    swipeEnabled: false,
    labelStyle: {
        fontSize: 12,
    },
    style: {
        backgroundColor: colors.background,
    },
};

const TabNavigator = createBottomTabNavigator({
        Profile: {
            screen: Profile,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => <Icon name="person" size={26} color={tintColor}/>,
            }
        },
        Feed: {
            screen: Feed,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => <Icon name="list" size={26} color={tintColor}/>,
            }
        },
        Notice: {
            screen: Notice,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => <Icon name="notifications-none" size={26} color={tintColor}/>,
            }
        },
    }, {
        tabBarOptions: options,
        backBehavior: 'none',
    }
);

export default TabNavigator;