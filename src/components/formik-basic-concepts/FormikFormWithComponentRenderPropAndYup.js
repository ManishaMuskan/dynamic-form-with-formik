import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import ErrorText from './../form/ErrorText';

const initialValues = {
	firstName: '',
	lastName: '',
	gender: '',
	email: '',
	address: '',
	social: {
		//nested object
		facebook: '',
		twitter: '',
	},
	phoneNumbers: ['', ''],
	skills: [''],
};

const validationSchema = Yup.object({
	firstName: Yup.string()
		.max(15, 'Must be 15 characters or less')
		.required('Required'),
	lastName: Yup.string()
		.max(20, 'Must be 20 characters or less')
		.required('Required'),
	gender: Yup.string().required('Required!'),
	email: Yup.string().email('Invalid email address').required('Required'),
	address: Yup.string().required('Address is required'),
	social: Yup.object().shape({
		facebook: Yup.string().required('Facebook username is required'),
		twitter: Yup.string().required('Twitter username is required'),
	}),
});

const onSubmit = (values, { setSubmitting }) => {
	setTimeout(() => {
		console.log('values', JSON.stringify(values, null, 2));
		setSubmitting(false);
	}, 400);
};

const FormikFormWithComponentRenderPropAndYup = () => {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}>
			<Form>
				<label htmlFor='firstName'>First name</label>
				<Field name='firstName' id='firstName' type='text' />
				<ErrorMessage name='firstName' component={ErrorText} />

				<label htmlFor='lastName'>Last name</label>
				<Field name='lastName' id='lastName' type='text' />
				<ErrorMessage name='lastName' component={ErrorText} />

				<label htmlFor='gender'>Gender</label>
				<Field name='gender' id='gender' as='select'>
					<option value={null}>--Select Gender--</option>
					<option value='male'>Male</option>
					<option value='female'>Female</option>
					<option value='other'>Other</option>
				</Field>
				{/*Using component attribute to render error text with custom component - used for styling of error  */}
				<ErrorMessage name='gender' component={ErrorText} />

				<label htmlFor='email'>Email</label>
				<Field name='email' id='email' type='email' />
				<ErrorMessage name='email'>
					{(errorMessage) => {
						return <ErrorText>{errorMessage} </ErrorText>; // using render prop method to style the errorText
					}}
				</ErrorMessage>

				<label htmlFor='address'>Address</label>
				<Field name='address'>
					{(props) => {
						console.log('props', props);
						return (
							<div>
								<textarea
									id='address'
									placeholder='something'
									{...props.field}
								/>
								{props.meta.touched && props.meta.error ? (
									<ErrorText className='error'>{props.meta.error}</ErrorText> // using render prop inside Field component
								) : null}
							</div>
						);
					}}
				</Field>

				<label htmlFor='facebook'>Facebook</label>
				<Field name='social.facebook' id='facebook' type='text' />
				<ErrorMessage name='social.facebook' component={ErrorText} />

				<label htmlFor='twitter'>Twitter</label>
				<Field name='social.twitter' id='twitter' type='text' />
				<ErrorMessage name='social.twitter' component={ErrorText} />

				{/* Array */}
				<label htmlFor='primaryNumber'>Primary number</label>
				<Field name='phoneNumbers[0]' id='primaryNumber' type='number' />
				<ErrorMessage name='phoneNumbers[0]' component={ErrorText} />

				<label htmlFor='secondaryNumber'>Secondary number</label>
				<Field name='phoneNumbers[1]' id='secondaryNumber' type='number' />
				<ErrorMessage name='phoneNumbers[1]' component={ErrorText} />

				<label>Skills</label>
				<FieldArray name='skills'>
					{(props) => {
						const { form, push, remove } = props;
						const { skills } = form.values;

						return skills.map((skill, index) => {
							return (
								<div key={index}>
									<Field name={`skills[${index}]`} type='text' />
									{index > 0 && (
										<button type='button' onClick={() => remove(index)}>
											-
										</button>
									)}
									<button type='button' onClick={() => push('')}>
										+
									</button>
								</div>
							);
						});
					}}
				</FieldArray>

				<button type='submit'>Submit</button>
			</Form>
		</Formik>
	);
};

export default FormikFormWithComponentRenderPropAndYup;
