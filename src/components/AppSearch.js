import { View, Text, Image } from 'react-native'
import React from 'react'
import { homeStyles } from '../styleSheets/HomeStyles'

const AppSearch = () => {
    return (
        <View style={[homeStyles.Search]}>
            <View style={[homeStyles.Search1]}>
                <Text style={[homeStyles.Text]}>Tìm Kiếm Trên Chợ Tốt</Text>
                <Image style={homeStyles.Search2} source={require('../../image/search.png')}></Image>
            </View>
        </View>
    )
}

export default AppSearch