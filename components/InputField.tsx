import React, { ChangeEvent, FocusEvent } from 'react'

type InputProps = {
	label: string
	id: string
	name: string
	inputType?: string
	value: string
	textarea?: boolean
	onChange: (e: ChangeEvent) => void
	onBlur: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
	error: boolean
	errorText: string
}

const InputField: React.FC<InputProps> = (props) => {
	return (
		<div>
			<label htmlFor={props.id}>{props.label}</label>
			{props.textarea ? (
				<textarea
					id={props.id}
					name={props.name}
					rows={4}
					value={props.value}
					onChange={props.onChange}
					onBlur={props.onBlur}
					className={props.error ? 'input_error' : ''}
				/>
			) : (
				<input
					type={props.inputType}
					id={props.id}
					name={props.name}
					value={props.value}
					onChange={props.onChange}
					onBlur={props.onBlur}
					className={props.error ? 'input_error' : ''}
				/>
			)}

			{props.error ? <small className='input_error_text'>*{props.errorText}</small> : <></>}
		</div>
	)
}

export default InputField
