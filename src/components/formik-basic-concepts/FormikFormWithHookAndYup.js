import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const initialValues = {
	firstName: '',
	lastName: '',
	gender: '',
	email: '',
};

const validationSchema = () => {
	return Yup.object({
		firstName: Yup.string()
			.max(15, 'Must be 15 characters or less')
			.required('Required'),
		lastName: Yup.string()
			.max(20, 'Must be 20 characters or less')
			.required('Required'),
		gender: Yup.string().required('Required!'),
		email: Yup.string().email('Invalid email address').required('Required'),
	});
};

const onSubmit = (values) => {
	console.log('values', JSON.stringify(values, null, 2));
};

const FormikFormWithHookAndYup = () => {
	const signupForm = useFormik({
		initialValues,
		validationSchema,
		onSubmit,
	});

	return (
		<form onSubmit={signupForm.handleSubmit}>
			<label htmlFor='firstName'>First name</label>
			<input
				type='text'
				id='firstName'
				name='firstName'
				{...signupForm.getFieldProps('firstName')}
			/>
			{signupForm.touched.firstName && signupForm.errors.firstName ? (
				<p className='error'>{signupForm.errors.firstName}</p>
			) : null}

			<label htmlFor='lastname'>Last name</label>
			<input
				type='text'
				id='lastname'
				name='lastName'
				{...signupForm.getFieldProps('lastName')}
			/>
			{signupForm.touched.lastName && signupForm.errors.lastName ? (
				<p className='error'>{signupForm.errors.lastName}</p>
			) : null}

			<label htmlFor='gender'>Gender</label>
			<select name='gender' id='gender' {...signupForm.getFieldProps('gender')}>
				<option value=''>--Select Gender--</option>
				<option value='male'>Male</option>
				<option value='female'>Female</option>
				<option value='other'>Other</option>
			</select>
			{signupForm.touched.gender && signupForm.errors.gender ? (
				<p className='error'>{signupForm.errors.gender}</p>
			) : null}

			<label htmlFor='email'>Email</label>
			<input
				type='email'
				id='email'
				name='email'
				{...signupForm.getFieldProps('email')}
			/>
			{signupForm.touched.email && signupForm.errors.email ? (
				<p className='error'>{signupForm.errors.email}</p>
			) : null}

			<button type='submit'>Submit</button>
		</form>
	);
};

export default FormikFormWithHookAndYup;
