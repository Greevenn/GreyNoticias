import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import axios from 'axios';

const NewsList = ({navigation}) => {
    const [news, setNews] = useState([]);
  
    const {container, title, newsItem, newsTitulo, newsDescripcion} = styles;
    useEffect(() => {
      fetchNews();
    }, []);
  
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'us',
            apiKey: '816655d9bce949faa2e2d93cd39b6543',
          },
        });
        setNews(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <View style={container}>
        <Text style={title}>Soy Grey Noticias</Text>
        <FlatList
          data={news}
          renderItem={({item}) => (
            <TouchableOpacity
              style={newsItem}
              key={item.id}
              onPress={() => navigation.navigate('NewsDetail', {newsItem: item})}>
              <Text style={newsTitulo}>{item.title}</Text>
              <Text style={newsDescripcion}>{item.description}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id?.toString()}
        />
      </View>
    );
  };