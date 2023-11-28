import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export default AppStyle = StyleSheet.create({
    Header: {
        width: "100%", height: 70, flexShrink: 0, backgroundColor: "#FFBF17"
    },
    Search: {
        width: 350, height: 40, flexShrink: 0, backgroundColor: "#FDFDFD", borderRadius: 5, marginTop: "4%", left: "7%"
    },
    Text: {
        color: "#888", fontSize: 16, fontFamily: "Roboto", fontWeight: 400, marginTop: "3%", left: "6%"
    },
    Sinhvien: {
        width: "100%", height: 122, flexShrink: 0, backgroundColor: "#FFBF17"
    },
    Khampha: {
        width: "100%", height: 40, flexShrink: 0, backgroundColor: "#FFBF17", marginTop: "5%"
    }
})