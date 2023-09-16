import { useFormik } from 'formik';
import React from 'react';

const validate = (values) => {
	const errors = {};

	if (values.firstName.trim() === '') {
		errors.firstName = 'First name can not be empty!';
	} else if (values.firstName.length > 15) {
		errors.firstName = 'Must be 15 characters or less';
	}

	if (values.lastName.trim() === '') {
		errors.lastName = 'Last name can not be empty!';
	}

	if (!values.gender) {
		errors.gender = 'Required!';
	}

	if (!values.email) {
		errors.email = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
	}

	return errors;
};

const FormikFormWithHook = () => {
	const signupForm = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			gender: '',
			email: '',
		},
		validate,
		onSubmit: (values) => {
			console.log('values', JSON.stringify(values, null, 2));
			console.log('signupForm', JSON.stringify(signupForm, null, 2));
		},
	});

	return (
		<form onSubmit={signupForm.handleSubmit}>
			<label htmlFor='firstName'>First name</label>
			<input
				type='text'
				id='firstName'
				name='firstName'
				onChange={signupForm.handleChange}
				onBlur={signupForm.handleBlur}
				value={signupForm.firstName}
				// {...signupForm.getFieldProps('firstName')} ---- onChange, onBlur, value - these three attributes can be replaced by getFieldProps
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

export default FormikFormWithHook;
