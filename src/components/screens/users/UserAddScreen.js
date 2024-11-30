import React from 'react';
import { StatusBar } from 'react-native';
import Screen from '../../layout/Screen';
import UserForm from '../../entity/users/UserForm';

const UserAddScreen = ({ navigation, route }) => {
    const { onAdd } = route.params;

    const handleCancel =  navigation.goBack;

    return (
        <Screen>
            <StatusBar barStyle="light-content" />
            <UserForm onSubmit={onAdd} onCancel={handleCancel} />
        </Screen>
    )
};

export default UserAddScreen;