import React from 'react';
import Input from './Input';
import RadioButton from './RadioButton';
import Select from './Select';
import Textarea from './Textarea';
import CheckboxGroup from './CheckboxGroup';
import Checkbox from './Checkbox';
import DatePicker from './DatePicker';

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
			return <RadioButton {...rest} />;
		case 'checkbox':
			return <Checkbox {...rest} />;
		case 'checkboxgroup':
			return <CheckboxGroup {...rest} />;
		case 'datepicker':
			return <DatePicker {...rest} />;
		default:
			return null;
	}
};

export default FormikControl;
