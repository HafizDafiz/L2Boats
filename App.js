import React from 'react';
import { View, Image, Text, ScrollView, TextInput, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const Boat = ({ name, description, icon_name, picture }) => {
    return (
        <View style={styles.boatContainer}>
            <Image source={picture} style={styles.boatImage} resizeMode="cover" />
            <Text style={styles.boatName}>
                {name}
            </Text>
            <Text style={styles.boatDescription}>
                {description}
            </Text>
            <Icon name={icon_name} size={24} color="#B23B23" style={styles.boatIcon} />

        </View>
    );
};

const AllBoats = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Boats</Text>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Boat
                    name='Sea Ray 500 Sundancer'
                    description='Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.'
                    icon_name="sailboat"
                    picture={require('./img/sea_ray.jpg')}
                />
                <Boat
                    name='Four Winns Horizon 180'
                    description='A sporty look and refined details truly set the Horizon 180 above all others.'
                    icon_name="sailboat"
                    picture={require('./img/four_winns.jpg')}
                />
                <Boat
                    name='Flipper 640 ST'
                    description='A modern take on the classic, traditional hardtop and perfect for a family picnic.'
                    icon_name="sailboat"
                    picture={require('./img/flipper.jpg')}
                />
                <Boat
                    name='Princess V48'
                    description='There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior.'
                    icon_name="sailboat"
                    picture={require('./img/princess.jpg')}
                />
                <Boat
                    name='Bayliner 175 Bowrider'
                    description='Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance.'
                    icon_name="sailboat"
                    picture={require('./img/bayliner.jpg')}
                />
                <Boat
                    name='Fairline Targa 47'
                    description='Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit.'
                    icon_name="sailboat"
                    picture={require('./img/fairline.jpg')}
                />
            </ScrollView>
        </View>
    );
};

const App = () => {
    return (
        <View style={styles.appContainer}>
            <AllBoats />
        </View>
    );
};

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        backgroundColor: '#f0fff0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'green',
        textAlign: 'center',
        paddingVertical: 15,
        backgroundColor: 'lightgreen',
    },
    scrollContainer: {
        padding: 10,
    },
    boatContainer: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        alignItems: 'center',
        width: 350,
    },
    boatImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    boatName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    boatDescription: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
        marginHorizontal: 15,
    },
    boatIcon: {
        marginTop: 10,

    },
});

export default App;


