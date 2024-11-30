import React, { useState } from 'react';
import Icons from '../../UI/Icons';
import Form from '../../UI/Form';
import useLoad from '../../API/useLoad.js';
import { defaultUser, levels, register } from '../../../utils/shared/defaults.js';
import { yearsEndpoint } from '../../../utils/shared/endpoints.js';
import { splitFullName } from '../../../utils/formHelper.js';

const UserForm = ({ ogUser, onSubmit, onCancel }) => {
    const [user, setUser] = useState(ogUser || defaultUser);
    const [years, isYearsLoading] = useLoad(yearsEndpoint);

    const handleChange = (field, value) => {
        if (field === 'UserName') {
            const { UserFirstname, UserLastname } = splitFullName(value);
            setUser({ ...user, UserFirstname, UserLastname, UserName: value });
        } else {
            setUser({ ...user, [field]: value });
        }
    };

    const handleSubmit = () => {
        const { UserFirstname, UserLastname } = splitFullName(user.UserName || '')
        const updatedUser = {
            ...user,
            UserFirstname,
            UserLastname
        }
        if (typeof onSubmit === 'function') { onSubmit(updatedUser); }
        else { console.error('onSubmit is not a function:', onSubmit); }
    };

    const submitLabel = ogUser ? 'Update User' : 'Add User';
    const submitIcon = ogUser ? <Icons.Edit size={15}/> : <Icons.Add size={15}/>;

    const cohorts = years.map((year) => ({ value: year.YearID, label: year.YearName }));

    return (
        <Form onSubmit={handleSubmit} onCancel={onCancel} submitLabel={submitLabel} submitIcon={submitIcon}>
            {/* <Text style={styles.title}>Edit Module</Text> */}
            <Form.InputText label="User ID" value={user.UserID} onChange={(value) => handleChange('UserID', value)} />
            <Form.InputText label="User's Name" value={`${user.UserFirstname} ${user.UserLastname}`} onChange={(value) => handleChange('UserName', value)} />
            <Form.InputText label="User's Email" value={user.UserEmail} onChange={(value) => handleChange('UserEmail', value)} />
            <Form.InputSelect label="User Level" prompt="Select User Level" options={levels} value={user.UserLevel} onChange={(value) => handleChange('UserLevel', value)} />
            <Form.InputSelect label="User Cohort" prompt="Select User Cohort" options={cohorts} isLoading={isYearsLoading} value={user.UserYearID} onChange={(value) => handleChange('UserYearID', value)} />
            <Form.InputText label="User Image" value={user.UserImageURL} onChange={(value) => handleChange('UserImage', value)} />
            <Form.InputSelect label="User Registered" prompt="Select Registered Value" options={register} value={user.UserRegistered} onChange={(value) => handleChange('UserRegistered', value)} />
        </Form>
    )
}

export default UserForm;