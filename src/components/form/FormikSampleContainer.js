import { Formik, Form } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const genderOptions = [
	{ optionLabel: '--Select Gender--', value: null },
	{ optionLabel: 'Male', value: 'male' },
	{ optionLabel: 'Female', value: 'female' },
	{ optionLabel: 'Other', value: 'other' },
];

const modeOfContactOtions = [
	{ optionLabel: 'Email', value: 'email' },
	{ optionLabel: 'Telephone', value: 'phone' },
];

const checkboxGroupOptions = [
	{ optionLabel: 'Option1', value: 'cOption1' },
	{ optionLabel: 'Option2', value: 'cOption2' },
	{ optionLabel: 'Option3', value: 'cOption3' },
];

const FormikSampleContainer = () => {
	const initialValues = {
		email: '',
		gender: '',
		address: '',
		modeOfContact: '',
		checkboxgroup: [],
		singleCheckbox: false,
		dateOfBirth: '',
	};
	const validationSchema = Yup.object({
		email: Yup.string().email('Invalid email address').required('Required'),
		gender: Yup.string().required('Required!'),
		address: Yup.string().required('Required!'),
		modeOfContact: Yup.string().required('Required!'),
		checkboxgroup: Yup.array().required('Required!'),
		singleCheckbox: Yup.boolean().oneOf([true], 'Field must be checked'),
		dateOfBirth: Yup.date().required('Required!'),
	});
	const onSubmit = (values) => {
		console.log('values', JSON.stringify(values, null, 2));
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}>
			{(formikProps) => {
				return (
					<Form>
						<FormikControl
							control='input'
							name='email'
							label='Email'
							type='email'
						/>

						<FormikControl
							control='select'
							name='gender'
							label='Gender'
							options={genderOptions}
						/>

						<FormikControl
							control='radiobutton'
							name='modeOfContact'
							label='Mode Of Contact'
							options={modeOfContactOtions}
						/>

						<FormikControl
							control='checkboxgroup'
							name='checkboxgroup'
							label='Checkbox Group Options'
							options={checkboxGroupOptions}
						/>

						<FormikControl
							control='checkbox'
							name='singleCheckbox'
							label='I agree on the terms provided'
						/>

						<FormikControl
							control='datepicker'
							name='dateOfBirth'
							label='Date of Birth'
						/>

						<FormikControl control='textarea' name='address' label='Address' />

						<button type='submit'>Submit</button>
					</Form>
				);
			}}
		</Formik>
	);
};

export default FormikSampleContainer;
