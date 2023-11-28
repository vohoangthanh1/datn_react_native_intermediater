import { StyleSheet } from "react-native";

export const DescriptionProductStyles = StyleSheet.create({

    back: {
        position: 'absolute',
        margin: 10,
        marginTop: 15
    },
    title: {
        textAlign: "center",
        color: "black",
        fontWeight: "500",
        fontSize: 20,
        marginTop: 10,
        flex: 0.8
    },
    titleItem: {
        padding: 10,
        backgroundColor: "#FFBF17",
        alignSelf: 'flex-start',
        color: "black"
    },
    inputText: {
        backgroundColor: "white",
        width: "100%",
        height: "65%",
        textAlignVertical: 'top'
    }

})
