import * as React from 'react'
import { Fragment } from 'react'
import BottomNav from './navigation/BottomNav';
import { Provider as PaperProvider, Button, Appbar, BottomNavigation, DefaultTheme, Provider, Drawer, Text, Menu, Divider, IconButton, FAB, Portal } from "react-native-paper";
import { Ionicons } from '@expo/vector-icons';
import { clearAllStoredData } from './StorageHandler';


import HomeScreen from './navigation/screens/HomeScreen';
import CardGallery from './navigation/screens/CardGallery.js';
import UserProfile from './navigation/screens/UserProfile';
import ShowImages from './navigation/screens/ShowImages';




const _goBack = () => console.log('Went back');

const HomeRoute = () => <HomeScreen/>

const ardGallery = <CardGallery/>

const userProfile = <UserProfile/>


const Lane_ChangeRoute = () => <LaneChangeScreenLeft />
const MyComponent2 = () => {
    const [active, setActive] = React.useState('');

};

const MyComponent = () => {
    const [active, setActive] = React.useState('');
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Home', icon: 'home' },
        { key: 'card', title: 'cardGallery', icon: 'wallpaper'},
        {key: 'userProfile', title: 'User Profile', icon: 'account'},
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: HomeRoute,
        card: cardGallery,
        userProfile: UserProfile,

    });

    return (
        <BottomNavigation barStyle = {{marginBottom: 0}}
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        >

        </BottomNavigation>

    );
};

export default function MainHome({navigation}) {
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });

    const { open } = state;
    return (

        <PaperProvider theme={theme}>
            <Portal >
            </Portal>
            <PaperProvider theme={theme}>

                <MyComponent />
            </PaperProvider>

        </PaperProvider>
    );

}



const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#12414F',
        accent: '#12414F',
    },
};
