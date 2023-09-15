import { ErrorMessage, Field } from 'formik';
import React from 'react';
import ErrorText from './ErrorText';

const RadioButton = (props) => {
	const { options, name, label, ...rest } = props;

	return (
		<div className='form-control'>
			<label>{label}</label>
			<Field name={name} {...rest}>
				{({ field }) => {
					return options.map(({ optionLabel, value }) => {
						return (
							<React.Fragment key={value}>
								<input
									type='radio'
									id={value}
									name={name}
									{...field}
									value={value}
									checked={field.value === value}
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

	// ---------------- another way -------------
	// return (
	// 	<div className='form-control'>
	// 		<label>{label}</label>
	// 		<br></br>
	// 		{options.map(({ optionLabel, value }) => {
	// 			return (
	// 				<label key={value} htmlFor={value}>
	// 					<Field
	// 						type='radio'
	// 						id={value}
	// 						name={name}
	// 						value={value}
	// 						{...rest}
	// 					/>
	// 					{optionLabel}
	// 				</label>
	// 			);
	// 		})}
	// 		<ErrorMessage name={name} component={ErrorText}></ErrorMessage>
	// 	</div>
	// );
};

export default RadioButton;
