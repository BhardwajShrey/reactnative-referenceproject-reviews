import React from "react";
import {StyleSheet, Text, View, Dimensions, Image, ImageBackground} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";

export default function Header({navigation, title})
{
    const openMenu = () =>
    {
        navigation.openDrawer();
    }

    return(
        <View style = {styles.header}>
            <MaterialIcons name = "menu" size = {28} style = {styles.icon} onPress = {openMenu} />
            <View style = {styles.headerTitle}>
                <Image source = {require("../assets/heart_logo.png")} style = {styles.headerImage} />
                <Text style = {styles.headerText}>{title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        header: {
            width: Dimensions.get("screen").width,
            height: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
        },
        headerText: {
            fontWeight: "bold",
            fontSize: 20,
            color: "#fff",
            letterSpacing: 1
        },
        icon: {
            position: "absolute",
            color: "#fff",
            left: 10
        },
        headerImage: {
            width: 26,
            height: 26,
            marginHorizontal: 10
        },
        headerTitle: {
            flexDirection: "row"
        }
    }
);