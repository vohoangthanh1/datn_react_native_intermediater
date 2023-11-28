import { View, Text, Image } from 'react-native'
import React from 'react'
import AppStyle from '../Constants/AppStyle'

const AppHeader = () => {
    return (
        <View style={[AppStyle.Header]}>
            <View style={[AppStyle.Search]}>
                <Text style={[AppStyle.Text]}>Tìm Kiếm Trên Chợ Tốt</Text>
                <Image style={{ width: 20, height: 20, flexShrink: 0, marginTop: "-6%", left: "90%" }} source={require('../../image/search.png')}></Image>
            </View>
        </View>
    )
}

export default AppHeader