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