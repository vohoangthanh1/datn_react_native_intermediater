import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { AppStyle } from '../constants/AppStyle'

const Login = () => {
    return (
        <View style={[AppStyle.container]}>
            <View style={[AppStyle.main, { position: 'relative' }]}>
                <Text style={[AppStyle.titleBig, { textAlign: 'right', color: '#525357' }]}>Bỏ qua</Text>
                <View style={[AppStyle, { marginTop: 25, alignItems: 'center' }]}>
                    <Image style={[{ resizeMode: 'cover' }]} source={require('../assets/images/regLogin.png')} />
                    <View style={styles.overlay}>
                        <Image style={[{ marginLeft: 200, marginTop: -8 }]} source={require('../assets/images/star.png')} />
                        <Text style={[AppStyle.titleBig, { color: '#ffffff', fontSize: 22 }]}>ĐĂNG NHẬP</Text>
                    </View>
                </View>
                <View style={[{ marginTop: 50, alignItems: 'center' }]}>
                    <TextInput style={[AppStyle.txtinput]} placeholder='Nhập số điện thoại'>
                    </TextInput>
                </View>
                <View style={[{ marginTop: 24, alignItems: 'center' }]}>
                    <TextInput style={[AppStyle.txtinput]} placeholder='Nhập mật khẩu'>
                    </TextInput>
                </View>
                <View style={[{ alignItems: 'center', marginTop: 24 }]}>
                    <TouchableOpacity style={[AppStyle.button, { backgroundColor: '#FF9900' }]} onPress={() => { }}>
                        <Text style={[AppStyle.titleBig, { color: '#ffffff', fontSize: 22, fontWeight: 500 }]}>Đăng nhập</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[AppStyle.button, { backgroundColor: '#E7E7E7', marginTop: 24 }]} onPress={() => { }}>
                        <Text style={[AppStyle.titleBig, { color: '#575757', fontSize: 22, fontWeight: 500 }]}>Quên mật khẩu</Text>
                    </TouchableOpacity>
                </View>
                <View style={[{ alignItems: 'center', marginTop: 24, flexDirection: 'row', justifyContent: 'space-around' }]}>
                    <TouchableOpacity style={[AppStyle.button, { backgroundColor: '#3B5998', width: '40%' }]} onPress={() => { }}>
                        <Text style={[AppStyle.titleBig, { color: '#ffffff', fontSize: 22, fontWeight: 500 }]}>Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[AppStyle.button, { backgroundColor: '#4CB944', width: '40%' }]} onPress={() => { }}>
                        <Text style={[AppStyle.titleBig, { color: '#ffffff', fontSize: 22, fontWeight: 500 }]}>Đăng ký</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex:1}}>
                <View style={[{
                    marginTop: 180,
                    width:600
                }]}>
                    <Image style={[{
                        width:'80%',
                        height:300,
                        resizeMode: 'cover',
                        position: 'absolute',
                    }]} source={require('../assets/images/reg02.png')} />
                    <Image style={[{
                        width:'80%',
                        height:300,
                        resizeMode: 'cover',
                        position: 'absolute',
                        marginTop:20,
                        marginRight:20
                    }]} source={require('../assets/images/reg01.png')} />
                    <Image style={[{
                        width:'80%',
                        height:240,
                        resizeMode: 'cover',
                        position: 'absolute',
                        marginTop:40,
                        
                    }]} source={require('../assets/images/reg00.png')} />
                </View>
            </View>
        </View>

    )
}

export default Login

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    }
});