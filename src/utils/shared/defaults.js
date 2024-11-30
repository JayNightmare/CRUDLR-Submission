import { defaultImageURL } from '../formHelper.js';

export const levels = [
    { value: 3, label: '3 (Foundation)' },
    { value: 4, label: '4 (First Year)' },
    { value: 5, label: '5 (Second Year)' },
    { value: 6, label: '6 (Third Year)' },
    { value: 7, label: '7 (Masters)' },
];

export const register = [
    { value: 1, label: 'True' },
    { value: 0, label: 'False' }
];

export const type = [
    { value: "Student", label: 'Student' },
    { value: "Staff", label: 'Staff' }
]

export const defaultModule = {
    ModuleID: null,
    ModuleCode: null,
    ModuleName: null,
    ModuleLevel: null,
    ModuleYearID: null,
    ModuleLeaderID: null,
    ModuleImageURL: defaultImageURL
}

export const defaultUser = {
    UserID: null,
    UserFirstname: null,
    UserLastname: null,
    UserEmail: null,
    userRegistered: false,
    UserLevel: null,
    UserYearID: null,
    UserUsertypeID: null,
    UserImageURL: defaultImageURL,
    UserUsertypeName: null,
    UserYearName: null
}