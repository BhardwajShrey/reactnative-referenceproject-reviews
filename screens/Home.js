import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";

import {globalStyles} from "../styles/Global";
import Card from "../shared/Card";
import ReviewForm from "./ReviewForm";

export default function Home({navigation})
{
    const [modalOpen, setModalOpen] = useState(false);

    const [reviews, setReviews] = useState(
        [
            { Title: 'Zelda, Breath of Fresh Air', Rating: 5, Body: 'lorem ipsum jatt da muqabla dass mennu kithe ai ni jatt da muqabla dass mennu kithe ai ni', key: '1' },
            { Title: 'Gotta Catch Them All (again)', Rating: 4, Body: 'lorem ipsum death route vajde salute ai kal kinne dekhi ki karna savera', key: '2' },
            { Title: 'Not So "Final" Fantasy', Rating: 3, Body: 'lorem ipsum ho gair kanuni yaar mere ghumde firde raatan nu', key: '3' },
        ]
    );

    const addReview = (review) =>
    {
        review.key = Math.random().toString();
        console.log(review);
        setReviews(
            (currentReviews) =>
            {
                return [review, ...currentReviews]
            }
        );
        setModalOpen(false);
    }

    return(
        <View style = {globalStyles.container}>
            <Modal visible = {modalOpen} animationType = "slide">
                <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
                    <View style = {styles.modalContent}>
                        <MaterialIcons
                            name = "close"
                            size = {24}
                            style = {{...styles.modalToggle, ...styles.modalClose}}
                            onPress = {() => setModalOpen(false)}
                        />
                        <ReviewForm addReview = {addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons
                name = "add"
                size = {24}
                style = {styles.modalToggle}
                onPress = {() => setModalOpen(true)}
            />

            <FlatList
                data = {reviews}
                renderItem = {
                    ({item}) =>
                    (
                        <TouchableOpacity onPress = {() => navigation.navigate("reviewDetails", item)}>
                            <Card>
                                <Text style = {globalStyles.titleText}>{item.Title}</Text> 
                                {/* everything bw the Card tags becomes props.children */}
                            </Card>
                        </TouchableOpacity>
                    )
                }
            />
        </View>
    );
}

const styles = StyleSheet.create(
    {
        modalToggle: {
            marginBottom: 12,
            borderWidth: 1,
            borderColor: "#d6d5c9",
            padding: 14,
            borderRadius: 6,
            alignSelf: "center"
        },
        modalClose: {
            marginTop: 60,
            marginBottom: 0
        },
        modalContent: {
            flex: 1
        }
    }
);