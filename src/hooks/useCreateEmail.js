import { useState } from 'react'
import { getEmail } from '@services/ia.js'

export function useCreateEmail() {
	const [emails, setEmails] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(false)
	const [prompt, setPrompt] = useState(null)

	const getValueInput = (e, nameInput) => e.target[nameInput].value
	const validatePrompt = (prompt) => {
		const arrayValues = Object.values(prompt)
		const validate = arrayValues.some((value) => value === '')
		return validate
	}

	const showError = (errorMessage) => {
		setTimeout(() => setError(false), 2000)
		setError(errorMessage)
	}

	const sendPrompt = async (prompt) => {
		try {
			const result = await getEmail(prompt)
			window.scroll({
				bottom: 0,
				behavior: 'smooth'
			})
			return result
		} catch (error) {
			showError('An error occurred try again.')
			console.log(error)
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		const prompt = {
			forMessage: getValueInput(e, 'for-message'),
			descriptionMessage: getValueInput(e, 'description-message'),
			typeEmail: getValueInput(e, 'options-email'),
			tone: getValueInput(e, 'tone')
		}

		setPrompt(prompt)
		if (validatePrompt(prompt)) {
			showError('All fields are required')
			return
		}

		setEmails(null)
		setIsLoading(true)
		const result = await sendPrompt(prompt)
		setEmails(result)

		setIsLoading(false)
	}
	return { handleSubmit, emails, isLoading, error, prompt, sendPrompt }
}
