import { ErrorMessage, Field } from 'formik';
import React from 'react';
import ErrorText from './ErrorText';

const CheckboxGroup = ({ options, name, label, ...rest }) => {
	return (
		<div className='form-control'>
			<label>{label}</label>
			<Field name={name} {...rest}>
				{({ field }) => {
					console.log(field);
					return options.map(({ optionLabel, value }) => {
						return (
							<React.Fragment key={value}>
								<input
									type='checkbox'
									id={value}
									name={name}
									{...field}
									value={value}
									checked={field.value.includes(value)}
								/>
								<label htmlFor={value}>{optionLabel}</label>
							</React.Fragment>
						);
					});
				}}
			</Field>
			<ErrorMessage name={name} component={ErrorText}></ErrorMessage>
		</div>
	);
};

export default CheckboxGroup;
