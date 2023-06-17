import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import {useRoute} from '@react-navigation/native'

const NewsDetail = ({ navigation}) =>{
    const route =useRoute();
    const newsItem = route.params?.newsItem;
    return(
        <View style={styles.container}>
            <Text style={styles.title}> {newsItem.title}</Text>
            <Text style={styles.descripcion}>{newsItem.descripcion}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    descripcion: {
        fontSize: 14,
    },
})

export default NewsDetail;