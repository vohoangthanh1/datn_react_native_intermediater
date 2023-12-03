import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React from 'react';

const DetailResultFind = () => {
    return (
        <View style={styles.body}>
            <View style={styles.header}>
                <Text style={styles.headerText}>X</Text>
                <Text style={styles.headerText}>LỌC KẾT QUẢ</Text>
            </View>
            <View style={styles.danhmuc}>
                <Text style={styles.textDanhMuc}>Danh mục</Text>
                <TextInput placeholder='Nhập danh mục' style={styles.input} placeholderTextColor='orange' />
                <Text style={styles.textGia}>Giá từ 0đ đến 30.000.000+ đ</Text>
                <TextInput placeholder='Nhập giá' style={styles.input} />
            </View>
            <View style={styles.sortBy}>
                <Text style={styles.textDanhMuc}>Sắp xếp theo</Text>
                <View style={styles.sortButtons}>
                    <TouchableOpacity style={styles.buton}>
                        <Text style={styles.textButon}>Tin mới</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buton} >
                        <Text style={styles.textButon}>Giá thấp</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.filterOptions}>
                <Text style={styles.textDanhMuc}>Đăng bởi</Text>
                <View style={styles.filterItems}>
                    <Text>Bán chuyên</Text>
                    <Text>Chính chủ</Text>
                </View>
            </View>
            <View style={styles.filterOptions}>
                <Text style={styles.textDanhMuc}>Bạn muốn</Text>
                <View style={styles.filterItems}>
                    <Text>Mua</Text>
                    <Text>Bán</Text>
                </View>
            </View>
            <View style={styles.displayOptions}>
                <Text style={styles.textDanhMuc}>Hiển thị hình dạng</Text>
                <View style={styles.displayButtons}>
                    <TouchableOpacity style={styles.buton}>
                        <Text style={styles.textButon}>Hình & chữ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buton}>
                        <Text style={styles.textButon}>Lưới</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.textButon}>
                    <Text style={styles.applyButton}>Áp dụng</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    danhmuc: {
        marginBottom: 20,
    },
    textDanhMuc: {
        marginBottom: 5,
        fontSize: 18,
        fontFamily: 'Roboto-Bold',
    },
    input: {
        height: 40,
        borderBottomWidth: 1, // Đặt độ dày của border bên dưới
        borderBottomColor: 'gray', // Đặt màu của border bên dưới
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    sortBy: {
        marginBottom: 20,
    },
    sortButtons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    filterOptions: {
        marginBottom: 20,
    },
    filterItems: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    displayOptions: {
        marginBottom: 20,
    },
    displayButtons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    applyButton: {
        padding: 10,
        backgroundColor: '#FFBF17',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        borderRadius: 10,
        alignContent: 'center',
        alignItems: 'center',
    },
    buton: {
        padding: 10,
        backgroundColor: '#FFBF17',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        borderRadius: 10,
        alignContent: 'center',
        alignItems: 'center',
    },
    textButon: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default DetailResultFind;
