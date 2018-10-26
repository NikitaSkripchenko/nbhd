import React from 'react';
import {createBottomTabNavigator} from "react-navigation";

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from "../../assets/colors/colors";
import Profile from "./../main/profile/ProfileIndex";
import Feed from "./../main/feed/FeedIndex";
import Notice from "./../main/notice/NoticeIndex";

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
                tabBarIcon: ({tintColor}) => <Icon name="ios-home" size={26} color={tintColor}/>,
            }
        },
        Feed: {
            screen: Feed, //nav
            navigationOptions: {
                tabBarIcon: ({tintColor}) => <Icon name="ios-search" size={26} color={tintColor}/>,
            }
        },
        Notice: {
            screen: Notice, //nav
            navigationOptions: {
                tabBarIcon: ({tintColor}) => <Icon name="ios-notifications" size={26} color={tintColor}/>,
            }
        },
    }, {
        tabBarOptions: options,
        backBehavior: 'none',
    }
);

export default TabNavigator;