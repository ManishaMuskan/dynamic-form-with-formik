import React from 'react';
import { Field, ErrorMessage } from 'formik';
import ErrorText from './ErrorText';
import DateView from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = (props) => {
	const { name, label, ...rest } = props;
	return (
		<div className='form-control'>
			<label htmlFor={name}>{label}</label>
			<Field name={name} {...rest}>
				{({ form, field }) => {
					const { setFieldValue } = form;
					const { value } = field;
					return (
						<DateView
							id={name}
							{...rest}
							{...field}
							selected={value}
							onChange={(val) => {
								setFieldValue(name, val);
							}}
						/>
					);
				}}
			</Field>
			<ErrorMessage name={name} component={ErrorText} />
		</div>
	);
};

export default DatePicker;
