import React from 'react'
import { FormProductDescription } from './FormProductDescription'
import { ListEmails } from './ListEmails'
import { useCreateEmail } from '@hooks/useCreateEmail'

export default function CreateProductDescription() {
	const { handleSubmitProductDescription, isLoading, emails, error, prompt } = useCreateEmail()
	return (
		<>
			<FormProductDescription
				handleSubmit={handleSubmitProductDescription}
				isLoading={isLoading}
				error={error}
			/>
			<ListEmails content={emails} prompt={prompt} />
		</>
	)
}
