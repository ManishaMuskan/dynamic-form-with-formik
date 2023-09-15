import React from 'react';
import { Field, ErrorMessage } from 'formik';
import ErrorText from './ErrorText';

const Checkbox = (props) => {
	const { name, label, ...rest } = props;
	return (
		<div className='form-control'>
			<Field type='checkbox' id={name} name={name} {...rest} />
			<label htmlFor={name}>{label}</label>
			<ErrorMessage name={name} component={ErrorText} />
		</div>
	);
};

export default Checkbox;
