import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Alert } from 'reactstrap';
import './Contribute.css';

export default function Contribute(props) {
    const defaultFormData = {
        companyName: '',
        link: '',
        reportEmailWebform: '',
        termsOfServiceIpPolicy: '',
        comments: ''
    };
    const [formData, setFormData] = useState(defaultFormData);
    const [alertVisible, setAlertVisible] = useState(false);

    useEffect(() => {
        if (alertVisible) {
            window.setTimeout(() => {
                setAlertVisible(false);
            }, 3000);
        }
    }, [alertVisible]);

    function handleChange(e) {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setFormData({
            ...formData,
            [fieldName]: fieldValue
        });
    }

    function resetFormData() {
        setFormData(defaultFormData);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const isDisabled = !formData.companyName || !formData.link;

        if (!isDisabled) {
            axios.request({
                method: 'POST',
                url: `${process.env.REACT_APP_API_URL}/companies`,
                data: formData
            });
        }

        // Show a "success" alert and reset form data to default (empty) values.
        onShowAlert();
        resetFormData();
    }

    const isDisabled = !formData.companyName || !formData.link;

    function onShowAlert() {
        setAlertVisible(true);
    }

    return (
        <div>
            <Alert color='success' isOpen={alertVisible} id='contribute-alert'>
                Thanks for your submission!
            </Alert>

            <div className='formBox'>
                <h1 className='contribute-header'> Contribute</h1>
                <form onSubmit={handleSubmit}>
                    <label className='req'>Required Field</label>
                    <br></br>
                    <input
                        type='text'
                        name='companyName'
                        placeholder='Company Name'
                        value={formData.companyName}
                        onChange={handleChange}
                    />
                    <br></br>
                    <br></br>
                    <label className='req'>Required Field</label>
                    <br></br>
                    <input
                        type='text'
                        name='link'
                        placeholder='Link'
                        value={formData.link}
                        onChange={handleChange}
                    />
                    <br></br>
                    <br></br>
                    <input
                        type='text'
                        name='reportEmailWebform'
                        placeholder='Report Email/Webform'
                        value={formData.reportEmailWebform}
                        onChange={handleChange}
                    />
                    <br></br>
                    <br></br>
                    <input
                        type='text'
                        name='termsOfServiceIpPolicy'
                        placeholder='Terms of Service/IP Policy'
                        value={formData.termsOfServiceIpPolicy}
                        onChange={handleChange}
                    />
                    <br></br>
                    <br></br>
                    <textarea
                        rows='4'
                        cols='50'
                        name='comments'
                        value={formData.comments}
                        onChange={handleChange}
                    >
                        Comments
                    </textarea>
                    <br></br>
                    <br></br>
                    <button
                        className={`formBtn ${isDisabled ? 'disabled' : ''}`}
                        disabled={isDisabled}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
