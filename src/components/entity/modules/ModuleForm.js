import React, { useState } from 'react';
import Icons from '../../UI/Icons';
import Form from '../../UI/Form';
import useLoad from '../../API/useLoad.js';
import { defaultModule, levels } from '../../../utils/shared/defaults.js';
import { yearsEndpoint, staffEndpoint } from '../../../utils/shared/endpoints.js';

const ModuleForm = ({ ogModule, onSubmit, onCancel }) => {
    const [module, setModule] = useState(ogModule || defaultModule);
    const [years, isYearsLoading] = useLoad(yearsEndpoint);
    const [leaders, isLeadersLoading] = useLoad(staffEndpoint);

    const handleChange = (field, value) => setModule({ ...module, [field]: value });
    const handleSubmit = () => {
        if (typeof onSubmit === 'function') { console.log(module); onSubmit(module); }
        else { console.error('onSubmit is not a function:', onSubmit); }
    };

    const submitLabel = ogModule ? 'Update Module' : 'Add Module';
    const submitIcon = ogModule ? <Icons.Edit size={15} /> : <Icons.Add size={15} />;

    const cohorts = years.map((year) => ({ value: year.YearID, label: year.YearName }));
    const staff = leaders.map((leader) => ({ value: leader.UserID, label: `${leader.UserFirstname} ${leader.UserLastname}` }));

    return (
        <Form onSubmit={handleSubmit} onCancel={onCancel} submitLabel={submitLabel} submitIcon={submitIcon}>
            {/* <Text style={styles.title}>Edit Module</Text> */}
            <Form.InputText label="Module Code" value={module.ModuleCode} onChange={(value) => handleChange('ModuleCode', value)} />
            <Form.InputText label="Module Name" value={module.ModuleName} onChange={(value) => handleChange('ModuleName', value)} />
            <Form.InputSelect label="Module Level" prompt="Select Module Level" options={levels} value={module.ModuleLevel} onChange={(value) => handleChange('ModuleLevel', value)} />
            <Form.InputSelect label="Module Cohort" prompt="Select Module Cohort" options={cohorts} isLoading={isYearsLoading} value={module.ModuleYearID} onChange={(value) => handleChange('ModuleYearID', value)} />
            <Form.InputSelect label="Module Leader" prompt="Select Leader" options={staff} isLoading={isLeadersLoading} value={module.ModuleLeaderID} onChange={(value) => handleChange('ModuleLeaderID', value)} />
            <Form.InputText label="Module Image" value={module.ModuleImageURL} onChange={(value) => handleChange('ModuleImage', value)} />
        </Form>
    )
}

export default ModuleForm;