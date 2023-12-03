import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ItemProductStylesSP } from '../styleSheets/ItemProductStylesSP'
import AppSearch2 from '../components/AppSearch2'
import { DanhMucSPStyless } from '../styleSheets/DanhMucSPStyless'
import { SelectCountry } from 'react-native-element-dropdown';
import ItemProductSP from '../Item/ImtemProductSP'


const DanhMucSPP = () => {
    const [country, setCountry] = useState(null)
    const [type, setType] = useState(null)
    const [loc, setLoc] = useState(null)
    const local_data = [
        {
            value: '1',
            lable: 'TP Hồ Chí Minh',

        },
        {
            value: '2',
            lable: 'Hà Nội',

        },
        {
            value: '3',
            lable: 'Đồng Tháp',

        },
        {
            value: '4',
            lable: 'Cần Thơ',

        },
        {
            value: '5',
            lable: 'Đà Nẵng',

        },
    ];

    const type_Data = [
        {
            value: '1',
            lable: 'điện thoại',

        },
        {
            value: '2',
            lable: 'máy tính',

        },
        {
            value: '3',
            lable: 'xe máy',

        }
    ];
    const loc_Data = [
        {
            value: '1',
            lable: 'nhiều',

        },
        {
            value: '2',
            lable: 'ít',

        },
        {
            value: '3',
            lable: 'chưa c',

        }
    ];


    return (
        <SafeAreaView>
            <AppSearch2 />
            <View style={DanhMucSPStyless.View1}>
                <SelectCountry
                    style={[DanhMucSPStyless.dropdown, { flex: 2 }]}
                    selectedTextStyle={DanhMucSPStyless.selectedTextStyle}
                    placeholderStyle={DanhMucSPStyless.placeholderStyle}
                    iconStyle={DanhMucSPStyless.iconStyle}
                    maxHeight={200}
                    value={country}
                    data={local_data}
                    valueField="value"
                    labelField="lable"
                    placeholder={local_data[0].lable}
                    searchPlaceholder="Search..."
                    onChange={e => {
                        setCountry(e.value);
                    }}
                />
                <SelectCountry
                    style={[DanhMucSPStyless.dropdown, { flex: 2 }]}
                    selectedTextStyle={DanhMucSPStyless.selectedTextStyle}
                    placeholderStyle={DanhMucSPStyless.placeholderStyle}
                    iconStyle={DanhMucSPStyless.iconStyle}
                    maxHeight={200}
                    value={type}
                    data={type_Data}
                    valueField="value"
                    labelField="lable"
                    placeholder={local_data[0].lable}
                    searchPlaceholder="Search..."
                    onChange={e => {
                        setType(e.value);
                    }}
                />
                <SelectCountry
                    style={[DanhMucSPStyless.dropdown, { flex: 1 }]}
                    selectedTextStyle={DanhMucSPStyless.selectedTextStyle}
                    placeholderStyle={DanhMucSPStyless.placeholderStyle}
                    iconStyle={DanhMucSPStyless.iconStyle}
                    maxHeight={200}
                    value={loc}
                    data={local_data}
                    valueField="value"
                    labelField="lable"
                    placeholder={local_data[0].lable}
                    searchPlaceholder="Search..."
                    onChange={e => {
                        setLoc(e.value);
                    }}
                />
            </View>
            <View style={ItemProductStylesSP.Container}>
                <View style={{ alignItems: "center" }}>
                    <View style={ItemProductStylesSP.View1}>
                        <Image style={ItemProductStylesSP.Image1} source={require('../../image/Oppo.png')} />
                    </View>
                    <Text style={ItemProductStylesSP.Text1}>Oppo</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <View style={ItemProductStylesSP.View2}>
                        <Image style={ItemProductStylesSP.Image2} source={require('../../image/Samsung.png')} />
                    </View>
                    <Text style={ItemProductStylesSP.Text2}>SamSung</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <View style={ItemProductStylesSP.View3}>
                        <Image style={ItemProductStylesSP.Image3} source={require('../../image/Apple.png')} />
                    </View>
                    <Text style={ItemProductStylesSP.Text3}>Apple</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <View style={ItemProductStylesSP.View4}>
                        <Image style={ItemProductStylesSP.Image4} source={require('../../image/Xiaomi.png')} />
                    </View>
                    <Text style={ItemProductStylesSP.Text4}>Xiaomi</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <View style={ItemProductStylesSP.View5}>
                        <Image style={ItemProductStylesSP.Image5} source={require('../../image/Sony.png')} />
                    </View>
                    <Text style={ItemProductStylesSP.Text5}>Sony</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <View style={ItemProductStylesSP.View5}>
                        <Image style={ItemProductStylesSP.Image5} source={require('../../image/Nokia.png')} />
                    </View>
                    <Text style={ItemProductStylesSP.Text5}>Nokia</Text>
                </View>


            </View>

            <ScrollView horizontal={true} style={DanhMucSPStyless.Scovil}>
                <Text style={DanhMucSPStyless.TextHangK}>Dung lượng cao</Text>
                <Text style={DanhMucSPStyless.TextHangK}>Game</Text>
                <Text style={DanhMucSPStyless.TextHangK}>Trả góp</Text>
                <Text style={DanhMucSPStyless.TextHangK}>Bảo hành</Text>
                <Text style={DanhMucSPStyless.TextHangK}>Chưa dùng</Text>
                <Text style={DanhMucSPStyless.TextHangK}>Pin trâu</Text>
            </ScrollView>
            <View style={{ width: "100%", flexWrap: "wrap", flexDirection: "row" }}>
                <ItemProductSP />

            </View>
        </SafeAreaView >

    )
}





export default DanhMucSPP