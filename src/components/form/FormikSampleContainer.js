import { Formik, Form } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

const genderOptions = [
	{ label: '--Select Gender--', value: null },
	{ label: 'Male', value: 'male' },
	{ label: 'Female', value: 'female' },
	{ label: 'Other', value: 'other' },
];

const FormikSampleContainer = () => {
	const initialValues = {
		email: '',
		gender: '',
		address: '',
	};
	const validationSchema = Yup.object({
		email: Yup.string().email('Invalid email address').required('Required'),
		gender: Yup.string().required('Required!'),
		address: Yup.string().required('Required!'),
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
							type='text'
						/>

						<FormikControl
							control='select'
							name='gender'
							label='Gender'
							options={genderOptions}
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
