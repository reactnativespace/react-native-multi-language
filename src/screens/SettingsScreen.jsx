import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

import { AppContext } from '../context/AppContext';

const SettingsScreen = ({ }) => {

    const { t, locale, setLocale } = React.useContext(AppContext);

    const languages = [
        { id: 'en', value: 'english' },
        { id: 'gr', value: 'german' },
        { id: 'it', value: 'italian' },
        { id: 'tr', value: 'turkish' }]

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
                }}>{t('settings')}</Text>
            </View>

            <Text>{t('select-language')}</Text>

            {languages.map(item =>
                <TouchableOpacity
                    key={item.id}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 16,
                        borderWidth: 0.8,
                        marginTop: 8,
                        borderRadius: 10
                    }}
                    onPress={() => setLocale(item.id)}>
                    <FontAwesome5 name={locale === item.id ? 'check-square' : 'square'} size={24} color='black' />
                    <Text style={{ marginLeft: 8 }}>{t(item.value)}</Text>
                </TouchableOpacity>)}


        </View>
    )
};

export default SettingsScreen;