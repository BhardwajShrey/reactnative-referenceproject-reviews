import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import {globalStyles, images} from "../styles/Global";
import Card from "../shared/Card";

export default function ReviewDetails({navigation})
{
    const rating = navigation.getParam("Rating");

    return(
        <View style = {globalStyles.container}>
            <Card>
                <Text style = {globalStyles.titleText}>{navigation.getParam("Title")}</Text>
                <Text>{navigation.getParam("Body")}</Text>
                <View style = {styles.rating}>
                    <Text>Our rating: </Text>
                    <Image source = {images.ratings[rating]} />
                </View>
            </Card>
        </View>
    );
}

// Rating = Review mein ek field
// rating = stylesheet and computation purposes ke liye

const styles = StyleSheet.create(
    {
        rating: {
            flexDirection: "row",
            justifyContent: "center",
            paddingTop: 16,
            marginTop: 16,
            borderTopWidth: 1,
            borderTopColor: "#eef"
        }
    }
);