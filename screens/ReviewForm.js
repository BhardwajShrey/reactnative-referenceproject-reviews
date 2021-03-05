import React from "react";
import {StyleSheet, View, Text, Button, TextInput} from "react-native";
import {Formik} from "formik";
import * as yup from "yup";

import {globalStyles} from "../styles/Global";
import FlatButton from "../shared/Button";

const reviewSchema = yup.object(
    {
        Title: yup.string().required().min(4),
        Body: yup.string().required().min(8),
        Rating: yup.string().required().test("isNum", "Rating must be between 1 and 5",
            (val) =>
            {
                return (parseInt(val) < 6 && parseInt(val) > 0);
            }
        )
    }
);
// test function arguments = (name given to test, error message to be displayed, function to validate against)

export default function ReviewForm({addReview})
{
    return(
        <View style = {globalStyles.container}>
            <Formik
                initialValues = {{Title: "", Body: "", Rating: ""}}
                validationSchema = {reviewSchema}
                onSubmit = {
                    (values, actions) =>
                    {
                        actions.resetForm();
                        addReview(values);
                    }
                }
            >
                {
                    (props) =>
                    (
                        <View>
                            <TextInput
                                style = {globalStyles.input}
                                placeholder = "Title of your review"
                                onChangeText = {props.handleChange("Title")}
                                value = {props.values.Title}
                                onBlur = {props.handleBlur("Title")}
                            />
                            <Text style = {globalStyles.errorText}>{props.touched.Title && props.errors.Title}</Text>

                            <TextInput
                                multiline
                                minHeight = {120}
                                style = {globalStyles.input}
                                placeholder = "Review in detail..."
                                onChangeText = {props.handleChange("Body")}
                                value = {props.values.Body}
                                onBlur = {props.handleBlur("Body")}
                            />
                            <Text style = {globalStyles.errorText}>{props.touched.Body && props.errors.Body}</Text>
                            
                            <TextInput
                                style = {globalStyles.input}
                                placeholder = "Your rating (1-5)"
                                onChangeText = {props.handleChange("Rating")}
                                value = {props.values.Rating}
                                keyboardType = "numeric"
                                onBlur = {props.handleBlur("Rating")}
                            />
                            <Text style = {globalStyles.errorText}>{props.touched.Rating && props.errors.Rating}</Text>

                            {/* <Button
                                title = "Submit"
                                color = "maroon"
                                onPress = {props.handleSubmit}
                            /> */}
                            <FlatButton text = "Submit" onPress = {props.handleSubmit} />
                        </View>
                    )
                }
            </Formik>
        </View>
    );
}

// formik tags take in a javascript (render) function inside