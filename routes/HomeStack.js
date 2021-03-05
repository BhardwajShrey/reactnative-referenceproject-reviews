import React from "react";
import {createStackNavigator} from "react-navigation-stack";

import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";
import Header from "../shared/Header";

// top element of this dictionary will be default
const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation = {navigation} title = "Reviews" />
            };
        }
    },
    reviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: "Details"
        }
    }
};

const HomeStack = createStackNavigator(screens,
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#3f7cac"
            },
            headerTintColor: "#fff"
        }
    }    
);

export default HomeStack;