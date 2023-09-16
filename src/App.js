import './App.css';
import FormikSampleContainer from './components/form/FormikSampleContainer';
import FormikFormWithHook from './components/formik-basic-concepts/FormikFormhook';
import FormikFormWithHookAndYup from './components/formik-basic-concepts/FormikFormWithHookAndYup';
import FormikFormWithComponentAndYup from './components/formik-basic-concepts/FormikFormWithComponentAndYup';
import FormikFormWithComponentRenderPropAndYup from './components/formik-basic-concepts/FormikFormWithComponentRenderPropAndYup';

function App() {
	return (
		<div className='App'>
			{/* Dynamic Form using re-usable components created by using the formik and yup library */}
			<FormikSampleContainer />

			{/* --------- Formik basic concepts ----- */}
			<FormikFormWithHook />
			<FormikFormWithHookAndYup />
			<FormikFormWithComponentAndYup />
			<FormikFormWithComponentRenderPropAndYup />
		</div>
	);
}

export default App;
