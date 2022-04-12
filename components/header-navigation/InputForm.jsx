import { useForm } from "react-hook-form"
import React, { useState } from "react"

export function InputForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const [login, setLogin] = useState("")
	const [password, setPassword] = useState("")

	const onSubmit = (data) => {
		setLogin("")
		setPassword("")
		console.log(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<h1>Вход:</h1>
			<input
				defaultValue={login}
				placeholder='Login'
				autoComplete='off'
				{...register("login", { required: true })}
			/>
			{errors.login && <span>This field is required</span>}
			<input
				defaultValue={password}
				placeholder='Password'
				autoComplete='off'
				{...register("password", { required: true })}
			/>
			{errors.password && <span>This field is required</span>}
			<button onClick={handleSubmit(onSubmit)}>Войти</button>
		</form>
	)
}
