import { ErrorMessage, Field } from 'formik';
import React from 'react';
import ErrorText from './ErrorText';

const Select = (props) => {
	const { name, label, options, ...rest } = props;
	return (
		<div className='form-control'>
			<label htmlFor={name}>{label}</label>
			<Field as='select' id={name} name={name} {...rest}>
				{options.map(({ optionLabel, value }, index) => {
					return (
						<option key={index} value={value}>
							{optionLabel}
						</option>
					);
				})}
			</Field>
			<ErrorMessage name={name} component={ErrorText} />
		</div>
	);
};

export default Select;
