import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import AppHeader from '../components/AppHeader'
import AppStyle from '../Constants/AppStyle'
const Home = () => {
    return (
        <SafeAreaView>
            <AppHeader />
            <View style={[AppStyle.Sinhvien]}>
                <Image style={{ width: "100%", height: 111, flexShrink: 0, borderRadius: 5, left: "6%", }} source={require('../../image/Sinhvien.png')}></Image>
            </View>
            <View style={[AppStyle.Khampha]}>
                <View style={{ width: 358, height: 37, flexShrink: 0, borderRadius: 5, backgroundColor: "#FFF", marginTop: "4%", left: 30 }}>
                    <Text style={{ color: "#242A37", fontSize: 15, padding: 7, textAlign: "center", }}>Khám Phá Các Danh Mục</Text>
                </View>
                <View>
                    <Image style={{ width: 380, height: 95, flexShrink: 0, marginTop: "5%", left: 18, flexWrap: "nowrap" }} source={require('../../image/Batdongsan.png')}></Image>
                    <Text style={{ color: "#FFF", fontSize: 15, marginTop: "-20%", left: 25, fontWeight: "bold" }}>Bất động sản</Text>
                </View>
                <View>
                    <Image style={{ width: 380, height: 95, flexShrink: 0, marginTop: "18%", left: 18 }} source={require('../../image/Xehoi.png')}></Image>
                    <Text style={{ color: "#FFF", fontSize: 15, marginTop: "-20%", left: 25, fontWeight: "bold" }}>Xe cộ</Text>
                </View>
                <View style={{ width: "100%", padding: 20 }}>
                    <View style={{ backgroundColor: "red", width: "100%", height: 60 }}>

                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default Home