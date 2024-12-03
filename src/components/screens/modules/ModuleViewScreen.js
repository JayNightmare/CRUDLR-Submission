import React from 'react';
import { StatusBar } from 'react-native';
import Screen from '../../layout/Screen';
import ModuleView from '../../entity/modules/ModuleView';

const ModuleViewScreen = ({ route, navigation }) => {
    try {
        const { module, onDelete, onModify, onFavourite } = route.params;

        const placeHolderText = `
    Lorem ipsum odor amet, consectetuer adipiscing elit. Mollis euismod rutrum sodales maximus donec sit imperdiet...
        `;

        const gotoModifyScreen = () => navigation.navigate('ModuleModifyScreen', { module, onModify });

        return (
            <Screen>
                <StatusBar barStyle="light-content" />
                <ModuleView
                    key={module.ModuleCode}
                    module={module}
                    onDelete={onDelete}
                    onModify={gotoModifyScreen}
                    onFavourite={onFavourite}
                    placeHolderText={placeHolderText}>
                </ModuleView>
            </Screen>
        )
    } catch (e) {
        console.warn("Error in ModuleViewScreen:", e);
    }
};

export default ModuleViewScreen;