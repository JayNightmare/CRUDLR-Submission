import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { Alert } from 'react-native';

export const useStore = (key, initialRecord) => {
    const [record, setRecord] = useState(initialRecord);

    const loadRecord = async () => {
        try {
            const recoveredJSON = await AsyncStorage.getItem(key);
            if (recoveredJSON != null) {
                const record = JSON.parse(recoveredJSON);
                setRecord(record);
            }
        } catch (e) {
            Alert.alert(`Error Occured while loading ${key} record: ${e.message}`);
        }
    }

    const saveRecord = async (newRecord) => {
        try {
            const encodedRecord = JSON.stringify(newRecord);
            await AsyncStorage.setItem(key, encodedRecord);
            setRecord(newRecord);
        } catch (e) {
            Alert.alert(`Error Occured while saving ${key} record: ${e.message}`);
        }
    }

    useEffect(() => { loadRecord(); }, []);

    return [ record, saveRecord ];
};