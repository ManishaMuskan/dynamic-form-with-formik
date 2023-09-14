import React from 'react';
import { Field, ErrorMessage } from 'formik';
import ErrorText from './ErrorText';

const Textarea = (props) => {
	const { name, label, ...rest } = props;
	return (
		<div className='form-control'>
			<label htmlFor={name}>{label}</label>
			<Field name={name} as='textarea' {...rest}></Field>
			<ErrorMessage name={name} component={ErrorText} />
		</div>
	);
};

export default Textarea;
