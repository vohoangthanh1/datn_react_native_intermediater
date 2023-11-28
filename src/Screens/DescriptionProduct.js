import { View, Text, Image } from 'react-native'
import React from 'react'
import { DescriptionProductStyles } from '../styleSheets/DescriptionProduct'

const DescriptionProduct = () => {
    return (
        <View>
            <View style={{ flexDirection: "row" }}>
                <Text style={DescriptionProductStyles.title}>Mô tả sản phẩm</Text>
            </View>
        </View>
    )
}

export default DescriptionProduct