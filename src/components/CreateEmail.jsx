import { useCreateEmail } from '@hooks/useCreateEmail'
import { ListEmails } from '@components/ListEmails.jsx'
import { FormCreateEmail } from '@components/FormCreateEmail'

export function CreateEmail() {
	const { handleSubmit, isLoading, emails, error, prompt } = useCreateEmail()
	return (
		<>
			<FormCreateEmail handleSubmit={handleSubmit} isLoading={isLoading} error={error} />
			<ListEmails content={emails} prompt={prompt} />
		</>
	)
}
