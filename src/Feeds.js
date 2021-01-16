import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';

import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Description from './Description';

class Feeds extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            liked: false
         };
    }
    render() {
        const { liked } = this.state;
        const { user, timeStamp, description, image, reaction, like, reacted, share } = this.props.item;

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.userSection}>
                        <Avatar.Image size={48} source={{ uri: user.avatar }} />
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>{user.name}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#fff', fontSize: 14 }}>{user.handler}</Text>
                                <Text style={{ color: '#fff', fontSize: 14, marginLeft: 20 }}>{timeStamp}</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Icon name="ellipsis-horizontal-outline" color="#fff" size={28} />
                    </TouchableOpacity>
                </View>

                <View style={{ margin: 20 }}>
                    <Description>
                        {description}
                    </Description>
                </View>

                { image && <View style={{ marginVertical: 10 }}>
                    <Image source={{ uri: 'https://picsum.photos/200' }} style={{ width: Dimensions.get('window').width, height: 200, }} />
                </View> }

                { reaction && <View>
                    <Text style={{ marginHorizontal: 20, marginVertical: 10, color: '#63676D', fontWeight: '500', fontSize: 16 }}>Reacted on</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, borderWidth: StyleSheet.hairlineWidth, borderColor: '#fff', borderRadius: 10 }}>
                        <Image source={{ uri: 'https://i.pravatar.cc/300' }} style={{ width: 100, height: '100%', borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }} />
                        <View style={{ width: '65%', margin: 20 }}>
                            <Description>
                                Deserunt culpa veniam enim laboris adipisicing culpa elit laborum Lorem exercitation non tempor. Ad eu anim aliqua sit irure dolore ipsum irure in amet eu consequat. Laborum qui amet reprehenderit enim commodo ad aute elit aute tempor proident.
                            </Description>
                        </View>

                        <View style={{ position: 'absolute', bottom: 10, right: 20 }}>
                            <Icon name="open-outline" color="#fff" size={16} />
                        </View>
                    </View>
                </View> }

                <View style={styles.options}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => this.setState({ liked: !this.state.liked })}>
                        { liked ? <Icon name="heart" size={28} color="red" /> : <Icon name="heart-outline" size={28} color="#fff" /> }
                        <Text style={{ fontSize: 14, fontWeight: '700', color: '#fff', marginLeft: 5 }}>{like}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="arrow-undo-outline" size={28} color="#4FE661" />
                        <Text style={{ fontSize: 14, fontWeight: '700', color: '#fff', marginLeft: 5 }}>{reacted + ' reacted'}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => this.setState({ liked: !this.state.liked })}>
                        <Icon name="share-social-sharp" size={28} color="#fff" />
                        <Text style={{ fontSize: 14, fontWeight: '700', color: '#fff', marginLeft: 5 }}>{share}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#393E47',
        width: Dimensions.get('window').width,
        marginVertical: 20,
        // padding: 20
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 20
    },
    userSection: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    options: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginVertical: 20,
        paddingHorizontal: 20
    }
})

export default Feeds;