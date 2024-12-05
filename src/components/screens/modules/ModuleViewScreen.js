import React from 'react';
import { StatusBar } from 'react-native';
import Screen from '../../layout/Screen';
import ModuleView from '../../entity/modules/ModuleView';

const ModuleViewScreen = ({ route, navigation }) => {
    try {
        const { module, onDelete, onModify, onFavourite } = route.params;

        const placeHolderText = `
Lorem ipsum odor amet, consectetuer adipiscing elit. Tempus maecenas elementum neque mattis lectus ante placerat netus. Lectus volutpat ipsum elementum eu suscipit class et vel. Enim congue gravida; nisl commodo libero ut. Curabitur nascetur lacinia purus efficitur; facilisis fringilla volutpat sagittis? Semper torquent ad neque; facilisi ipsum sit mollis nisl sem. Varius consectetur placerat natoque ex rutrum ante luctus. Nulla ex lacus per etiam ex scelerisque. Metus dictum velit inceptos tincidunt per lobortis libero.

Taciti sollicitudin sodales varius duis egestas netus; facilisis imperdiet. Sagittis primis placerat iaculis feugiat integer elementum. Viverra phasellus ornare class adipiscing blandit finibus habitant proin. Egestas tempor est ultrices ac sit ad; scelerisque natoque. Pretium eros nisl inceptos elementum quisque duis suscipit torquent. Morbi donec consequat interdum accumsan tempor in egestas consequat. Mauris id tempor imperdiet vulputate lectus mattis. Vestibulum nibh ridiculus gravida; quam erat erat torquent ut sapien. Justo est tristique condimentum dolor dolor; blandit rhoncus justo. Facilisis quam dictum enim aliquet aliquet leo.

Lacus scelerisque faucibus lobortis lacus malesuada sed augue in. Pulvinar sodales arcu dignissim; elit nisi varius varius. Ullamcorper dignissim sodales gravida eleifend taciti amet maecenas tristique suspendisse. Nulla libero risus class feugiat adipiscing. Lectus justo sociosqu maecenas efficitur cubilia torquent potenti feugiat. Sapien dolor porta amet morbi himenaeos elementum dis. Feugiat nec habitasse torquent mattis penatibus faucibus pellentesque nisl. Nec integer leo massa ornare quis lobortis. Elit sed eleifend facilisis cras pharetra.
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