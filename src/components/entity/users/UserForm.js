import React, { useState } from 'react';
import Icons from '../../UI/Icons';
import Form from '../../UI/Form';
import useLoad from '../../API/useLoad.js';

const defaultUser = {
    UserID: null,
    UserFirstname: null,
    UserLastname: null,
    UserEmail: null,
    userRegistered: false,
    UserLevel: null,
    UserYearID: null,
    UserUsertypeID: null,
    UserImageURL: null,
    UserUsertypeName: null,
    UserYearName: null
}

const UserForm = ({ ogModule: ogUser, onSubmit, onCancel }) => {
    defaultUser.UserID = Math.floor(100000 + Math.random() * 900000);
    defaultUser.UserImageURL = 'https://via.placeholder.com/150x150';

    const yearsEndpoint = 'https://softwarehub.uk/unibase/api/years';

    const levels = [
        { value: 3, label: '3 (Foundation)' },
        { value: 4, label: '4 (First Year)' },
        { value: 5, label: '5 (Second Year)' },
        { value: 6, label: '6 (Third Year)' },
        { value: 7, label: '7 (Masters)' },
    ];

    const [user, setUser] = useState(ogUser || defaultUser);
    const [years, isYearsLoading] = useLoad(yearsEndpoint);

    const handleChange = (field, value) => setUser({ ...user, [field]: value });
    const handleSubmit = () => {
        if (typeof onSubmit === 'function') { onSubmit(user); }
        else { console.error('onSubmit is not a function:', onSubmit); }
    };

    const submitLabel = ogUser ? 'Update Module' : 'Add Module';
    const submitIcon = ogUser ? <Icons.Edit size={15}/> : <Icons.Add size={15}/>;

    const cohorts = years.map((year) => ({ value: year.YearID, label: year.YearName }));

    return (
        <Form onSubmit={handleSubmit} onCancel={onCancel} submitLabel={submitLabel} submitIcon={submitIcon}>
            {/* <Text style={styles.title}>Edit Module</Text> */}
            <Form.InputText label="User Code" value={user.UserCode} onChange={(value) => handleChange('UserCode', value)} />
            <Form.InputText label="User Name" value={user.UserName} onChange={(value) => handleChange('UserName', value)} />
            <Form.InputSelect label="User Level" prompt="Select User Level" options={levels} value={user.UserLevel} onChange={(value) => handleChange('UserLevel', value)} />
            <Form.InputSelect label="User Cohort" prompt="Select User Cohort" options={cohorts} isLoading={isYearsLoading} value={user.UserYearID} onChange={(value) => handleChange('UserYearID', value)} />
            <Form.InputText label="User Image" value={user.UserImageURL} onChange={(value) => handleChange('UserImage', value)} />
        </Form>
    )
}

export default UserForm;