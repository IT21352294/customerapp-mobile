import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function SignupScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Signup Page</Text>

            {/* Add your signup form here */}

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.buttonText}>Back to Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#0288D1",
        padding: 15,
        borderRadius: 5,
        width: "80%",
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
});
