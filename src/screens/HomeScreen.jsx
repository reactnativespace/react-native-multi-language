import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

import { AppContext } from '../context/AppContext';

const HomeScreen = ({ route, navigation }) => {

    const { t } = React.useContext(AppContext);

    const fruits = [
        { id: 1, icon: '🍇', value: 'grapes', background: 'rgba(107, 67, 139, 0.2)' },
        { id: 2, icon: '🍉', value: 'watermelon', background: 'rgba(248, 49, 47, 0.2)' },
        { id: 3, icon: '🍐', value: 'pear', background: 'rgba(195, 239, 60, 0.2)' },
        { id: 4, icon: '🍍', value: 'pineapple', background: 'rgba(243, 173, 96, 0.2)' },
        { id: 5, icon: '🍓', value: 'strawberry', background: 'rgba(248, 49, 47, 0.2)' },
        { id: 6, icon: '🍑', value: 'peach', background: 'rgba(255, 130, 45, 0.2)' },
        { id: 7, icon: '🥝', value: 'kiwi', background: 'rgba(69, 224, 118, 0.2)' },
        { id: 8, icon: '🍒', value: 'cherries', background: 'rgba(246, 50, 47, 0.2)' }
    ]

    const navigateToSettings = () => {
        navigation.navigate('Settings')
    }

    return (
        <View style={{
            flex: 1,
            paddingHorizontal: 16,
            paddingVertical: 32
        }}>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Text style={{
                    fontSize: 32,
                    fontWeight: '800'
                }}>{t('home')}</Text>
                <TouchableOpacity onPress={() => navigateToSettings()}>
                    <FontAwesome5 name='cog' size={24} color='black' />
                </TouchableOpacity>
            </View>

            <Text style={{ fontSize: 16, fontWeight: '600' }}>{t('fruits')}</Text>

            {fruits.map(item => <View
                key={item.id}
                style={{
                    backgroundColor: item.background,
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 16,
                    borderWidth: 2,
                    marginTop: 8,
                    borderRadius: 10
                }}>
                <Text style={{ fontSize: 20 }}>{item.icon}</Text>
                <Text style={{ marginLeft: 8, fontWeight: 500 }}>{t(item.value)}</Text>
            </View>)}
        </View>
    )
};

export default HomeScreen;