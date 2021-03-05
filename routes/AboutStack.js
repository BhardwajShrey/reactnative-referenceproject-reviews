import React from "react";
import {createStackNavigator} from "react-navigation-stack";

import About from "../screens/About";
import Header from "../shared/Header";

// top element of this dictionary will be default
const screens = {
    About: {
        screen: About,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation = {navigation} title = "About app" />
            };
        }
    }
    // stack is expandable in the future
};

const AboutStack = createStackNavigator(screens,
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#3f7cac"
            },
            headerTintColor: "#fff"
        }
    }    
);

export default AboutStack;