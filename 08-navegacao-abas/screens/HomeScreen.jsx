import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import {Text,Card,Title,Paragraph} from 'react-native-paper'

export default function HomeScreen() {
  return (
    <ScrollView>
        <View style={styles.container}>
        <Text variant='headlineSmall'  style={{fontWeight:'bold'}}>HomeScreen</Text>

        <Card style={{margin:10}}>
            <Card.Content>
                <Title>oiie</Title>
                <Paragraph>asdfghjklçsdfghjklsdfghjklsdfghjklerftgyhujikoswedrftgyhujikerftgyhujiksedrftgyhujikwedrftgyhuwsedrftgyhu</Paragraph>
            </Card.Content>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}}/>
        </Card>
        </View>
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'fff',
        paddingTop:10,
        alignItems:'center',
        
    }
})