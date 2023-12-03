import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import { ItemProductStylesSP } from '../styleSheets/ItemProductStylesSP'
const ItemProductSP = () => {
    return (
        <View style={ItemProductStylesSP.Container1}>
            <View style={ItemProductStylesSP.View6}>
                <Image style={ItemProductStylesSP.Image6} source={require('../../image/Galaxy.png')} />
                <Text style={ItemProductStylesSP.Text6}>Samsung Galaxy Note 9</Text>
                <Text style={ItemProductStylesSP.Text7}> 6.900.000đ</Text>
                <View style={ItemProductStylesSP.Container2}>
                    <Image style={ItemProductStylesSP.Image7} source={require('../../image/Home.png')}></Image>
                    <Text style={ItemProductStylesSP.Image8}>|</Text>
                    <Image style={ItemProductStylesSP.Image9} source={require('../../image/Kaka.png')}></Image>
                    <Text style={ItemProductStylesSP.Text8}>Tin ưu tiên</Text>
                    <Text style={ItemProductStylesSP.Text9}>|</Text>
                    <Text style={ItemProductStylesSP.Text10} >Quận 12</Text>
                </View>
                <View style={ItemProductStylesSP.Text11}>
                    <Text style={ItemProductStylesSP.Text12} >Dung lượng cao</Text>
                    <Text style={ItemProductStylesSP.Text13}>Game</Text>
                    <Text style={ItemProductStylesSP.Text14} >Bảo hành</Text>
                    <Text style={ItemProductStylesSP.Text15}>Trả góp</Text>
                    <Text style={ItemProductStylesSP.Text16}>Cấu hình</Text>
                </View>
            </View>
        </View >
    )
}

export default ItemProductSP