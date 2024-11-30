import { StatusBar } from 'react-native';
import Screen from '../../layout/Screen';
import UserForm from '../../entity/users/UserForm';


const UserModifyScreen = ({ route, navigation }) => {
    const { user, onModify } = route.params;

    const handleCancel = navigation.goBack;

    return (
        <Screen>
            <StatusBar barStyle="light-content" />
            <UserForm ogUser={user} onSubmit={onModify} onCancel={handleCancel} />
        </Screen>
    );
};

export default UserModifyScreen;