import React from 'react';
import Input from './Input';
import Select from './Select';
import Textarea from './Textarea';

const FormikControl = (props) => {
	const { control, ...rest } = props;

	switch (control) {
		case 'input':
			return <Input {...rest} />;
		case 'select':
			return <Select {...rest} />;
		case 'textarea':
			return <Textarea {...rest} />;
		case 'radiobutton':
		case 'checkbox':
		case 'checkboxgroup':
		case 'datepicker':
		default:
			return null;
	}
};

export default FormikControl;
