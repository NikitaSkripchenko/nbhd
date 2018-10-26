import React from 'react';
import {createBottomTabNavigator} from "react-navigation";

import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from "../../assets/colors/colors";
import Profile from "./../main/profile/ProfileScreen";
import Feed from "./../main/feed/FeedScreen";
import Notice from "./../main/notice/NoticeScreen";

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
            screen: Profile,//nav
            navigationOptions: {
                tabBarIcon: ({tintColor}) => <Icon name="person" size={26} color={tintColor}/>,
            }
        },
        Feed: {
            screen: Feed, //nav
            navigationOptions: {
                tabBarIcon: ({tintColor}) => <Icon name="list" size={26} color={tintColor}/>,
            }
        },
        Notice: {
            screen: Notice, //nav
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