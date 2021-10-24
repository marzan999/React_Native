import React from 'react';
import { Image, Text, View } from 'react-native';

function ListItem(props) {
    return (
        <View style={{ margin: 10, flexDirection: 'row' }}>
            <View style={{ height: 100, width: 100, borderRadius: 50 }}>
                <Image source={props.image} style={{ height: 100, width: 100, overflow: 'hidden', borderRadius: 50, }} />
            </View>
            <View style={{ justifyContent: 'center', marginLeft: 20, }}>
                <Text>{props.title}</Text>
                <Text>{props.subTitle}</Text>
            </View>
        </View>
    );
}

export default ListItem;