import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, FlatList, Image, StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
const { height, width } = Dimensions.get("window");
import { SharedElement } from 'react-navigation-shared-element';

const data = [
    {
        id: '0',
        title: 'Zhangye Danxia Geopark, China',
        uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbz-zhangye-gettyimages-175323801-1505334995.jpg?crop=1xw:1xh;center,top&resize=980:*',
        description: `Geology lovers and avid Instagrammers alike will be drawn to the otherworldly hues of the "Rainbow Mountains." The colors were formed by the layering of sedimentary mineral deposits over millions of years, but it's hard to look at the flowing reds, yellows, and oranges and not feel like you're witnessing magic.`
    },
    {
        id: '1',
        title: 'Venice, Italy',
        uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbz-venice-gettyimages-489741024-1505338894.jpg?crop=1xw:1xh;center,top&resize=980:*',
        description: `If traversing the canals with a be-striped gondolier sounds unbearably touristy, stick to the sidewalks and spectacular arched bridges to get your fill of this truly unique, wildly romantic floating city.`
    },
    {
        id: '2',
        title: 'Banff National Park, Canada',
        uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/banff-517747003-1494616292.jpg?crop=0.9997418022205009xw:1xh;center,top&resize=980:*',
        description: `The glacial lakes in Canada's first national park have some of the bluest water you've ever seen. Even if you're not particularly outdoorsy, you can still admire the views from one of the cozy and luxurious lakeside lodges throughout the park, like the Fairmont Chateau Lake Louise.`
    },
    {
        id: '3',
        title: 'Great Ocean Road, Australia',
        uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/great-ocean-road-128394846-1494616348.jpg?crop=1xw:1xh;center,top&resize=980:*',
        description: `Head west from Melbourne on this coastal drive to see everything from the famous 12 Apostle rock formations, to koalas in Great Otway National Park as well as the charming seaside town of Lorne.`
    },
    {
        id: '4',
        title: 'Machu Picchu',
        uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbz-machu-ppichu-gettyimages-629556601-1505338681.jpg?crop=1xw:1xh;center,top&resize=980:*',
        description: `This World Heritage site is easily the most famous spot in Peru, and for good reason. The ancient terraced city’s astounding architecture and sweeping views of the surrounding mountains will leave you breathless (as might the nearly 8,000 foot elevation.)`
    },
]


const Story: React.FC<any> = (props) => {
    const { id, title, uri } = props;
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={{ padding: 10 }} onPress={() => navigation.navigate("Detail", { ...props })}>
            <View style={{ width: width / 2.5, height: 200, borderRadius: 10 }}>
                <SharedElement id={`image-${id}`} style={[StyleSheet.absoluteFillObject]}>
                    <Image style={[StyleSheet.absoluteFillObject, { borderRadius: 10 }]} source={{ uri }} />
                </SharedElement>
                <SharedElement id={`title-${id}`} style={[StyleSheet.absoluteFillObject]}>
                <Text style={{ position: 'absolute', bottom: 0, padding: 10, color: 'white', fontSize: 20, fontWeight: '700' }}>{title}</Text>
                </SharedElement>
            </View>
        </TouchableOpacity>
    )
}


export const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
            <FlatList
                data={data}
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Story {...item} />}
            />
        </SafeAreaView>
    )
}