import React from 'react';
import { FlatList } from 'react-native';
import ListItem from '../components/ListItem';

const messages = [
    {
        id: 1,
        title: "Name: Marzan",
        description: "Age: 22",
        image: require("../assets/0.jpeg"),
    },

    {
        id: 2,
        title: "Name: Maria",
        description: "Age: 12",
        image: require("../assets/00.jpeg"),
    }
]

function MessagesScreen(props) {
    return (
        <FlatList
            style={{ paddingTop: 40, }}
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({ item }) =>
                <ListItem
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                />}
        />
    );
}

export default MessagesScreen;