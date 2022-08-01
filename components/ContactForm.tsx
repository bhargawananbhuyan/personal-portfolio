import { faArrowRightLong, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import InputField from './InputField'

const formValidationSchema = Yup.object().shape({
	name: Yup.string().required('Required'),
	email: Yup.string().email('Please enter a valid email').required('Required'),
	message: Yup.string().required('Required'),
})

const ContactForm: React.FC = () => {
	const [submittedName, setSubmittedName] = useState('')

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			message: '',
		},
		validationSchema: formValidationSchema,
		onSubmit: (values, { resetForm }) => {
			setSubmittedName(values.name)
			resetForm()
		},
	})

	useEffect(() => {
		if (submittedName) setTimeout(() => setSubmittedName(''), 5000)
	}, [submittedName])

	return (
		<>
			{submittedName && (
				<div className='mb-5 p-3.5 bg-green-500 text-white font-semibold rounded flex items-center gap-x-2.5'>
					<FontAwesomeIcon icon={faCheckCircle} />
					<small>
						Thanks for dropping by {submittedName}. I&apos;ll get back shortly.
					</small>
				</div>
			)}
			<form className='contact_form' onSubmit={formik.handleSubmit}>
				<InputField
					id='name'
					name='name'
					label='Name'
					inputType='text'
					value={formik.values.name}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={Boolean(formik.touched.name && formik.errors.name)}
					errorText={formik.touched.name && formik.errors.name ? formik.errors.name : ''}
				/>

				<InputField
					id='email'
					name='email'
					label='Email'
					inputType='email'
					value={formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={Boolean(formik.touched.email && formik.errors.email)}
					errorText={
						formik.touched.email && formik.errors.email ? formik.errors.email : ''
					}
				/>

				<div className='md:col-span-2'>
					<InputField
						textarea
						id='message'
						name='message'
						label='Message'
						value={formik.values.message}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						error={Boolean(formik.touched.message && formik.errors.message)}
						errorText={
							formik.touched.message && formik.errors.message
								? formik.errors.message
								: ''
						}
					/>
				</div>
				<div className='mt-2.5'>
					<button
						type='submit'
						className='px-2.5 flex items-center gap-x-3.5 outline-none'
					>
						<span className='font-semibold'>Send</span>
						<span className='h-[3.5rem] w-[3.5rem] border-2 border-gray-800 grid place-items-center rounded-full sh_btn'>
							<FontAwesomeIcon icon={faArrowRightLong} />
						</span>
					</button>
				</div>
			</form>
		</>
	)
}

export default ContactForm
