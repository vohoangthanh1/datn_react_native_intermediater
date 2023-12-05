import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import { ItemProductStyles } from '../styleSheets/ItemProductStyles'
const ItemProduct = () => {
    return (
        <View style={ItemProductStyles.Container1}>
            <View style={ItemProductStyles.View6}>
                <Image style={ItemProductStyles.Image6} source={require('../../image/Galaxy.png')} />
                <Text style={ ItemProductStyles.Text6}>Samsung Galaxy Note 9</Text>
                <Text style={ItemProductStyles.Text7}> 6.900.000đ</Text>
                <View style={ItemProductStyles.Container2}>
                    <Image style={ItemProductStyles.Image7} source={require('../../image/Home.png')}></Image>
                    <Text style={ItemProductStyles.Image8}>|</Text>
                    <Image style={ItemProductStyles.Image9} source={require('../../image/Kaka.png')}></Image>
                    <Text style={ItemProductStyles.Text8}>Tin ưu tiên</Text>
                    <Text style={ ItemProductStyles.Text9}>|</Text>
                    <Text style={ItemProductStyles.Text10} >Quận 12</Text>
                </View>
                <View style={ItemProductStyles.Text11}>
                    <Text style={ItemProductStyles.Text12} >Dung lượng cao</Text>
                    <Text style={ItemProductStyles.Text13}>Game</Text>
                    <Text style={ItemProductStyles.Text14} >Bảo hành</Text>
                    <Text style={ItemProductStyles.Text15}>Trả góp</Text>
                    <Text style={ItemProductStyles.Text16}>Cấu hình</Text>
                </View>
            </View>
        </View >
    )
}

export default ItemProduct