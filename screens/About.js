import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {globalStyles} from "../styles/Global";

export default function About()
{
    return(
        <View style = {globalStyles.container}>
            <Text>
                Idhar mai faaltu ki bakwaas hagega jiske baare mein ghanta kisi ko farak 
                nahi padta but meri ego satisfy karne ke liye imp hai ye page
            </Text>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            padding: 24
        }
    }
);