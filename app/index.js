import {View, Text, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS,icons,images,SIZES } from '../constants';
import { Stack } from 'expo-router';
import {Welcome, Popularjobs, Nearbyjobs ,ScreenHeaderBtn} from '../components';


export default function Home () {
    return (
        <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
            <Stack.Screen
            options={{
                headerstyle: {backgroundColor:COLORS.lightWhite},
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                ),
                headerTitle:""
            }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View 
                style={{flex:1,
                    padding: SIZES.medium,
                }}>
                    <Welcome/>
                    <Popularjobs/>
                    <Nearbyjobs/>

                </View>
            </ScrollView>

        </SafeAreaView>
    );
}