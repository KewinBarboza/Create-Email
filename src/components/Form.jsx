import { OPTIONS, TONE } from '@constants/index.js'
import { useCreateEmail } from '@hooks/useCreateEmail'

import { CardRadio } from '@components/CardRadio.jsx'
import { ListEmails } from '@components/ListEmails.jsx'
import Input from '@components/Input.jsx'
import TextArea from '@components/TextArea.jsx'
import ContainerStep from '@components/ContainerStep.jsx'

export function Form() {
	const { handleSubmit, isLoading, emails, error } = useCreateEmail()
	return (
		<>
			<form onSubmit={handleSubmit} className='flex w-full flex-col'>
				<ContainerStep step={1}>
					<CardRadio options={OPTIONS} label={'Select the type of mail'} />
				</ContainerStep>

				<ContainerStep step={2}>
					<Input
						placeholder={'Tom, mi friend'}
						nameInput={'for-message'}
						label={'Who is the message for?'}
						id={'for-message'}
					/>
				</ContainerStep>

				<ContainerStep step={3}>
					<TextArea
						placeholder={'description of email'}
						nameInput={'description-message'}
						label={'Write a description of the email'}
						id={'description-message'}
					/>
				</ContainerStep>

				<ContainerStep step={4}>
					<CardRadio label={'Select a tone'} options={TONE} />
				</ContainerStep>

				{error && (
					<p className='ml-10 rounded-md bg-red-300/75 p-2 text-center text-red-600'>{error}</p>
				)}
				<button
					disabled={isLoading}
					type='submit'
					className={`ml-10 py-2.5 px-5 text-sm font-medium ${
						isLoading ? 'bg-gray-500 hover:bg-gray-500 ' : 'bg-blue-700 hover:bg-blue-800 '
					} my-6 rounded-lg  text-center text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900`}
				>
					{isLoading ? 'Creating mail...' : 'Create content'}
				</button>
			</form>

			<ListEmails content={emails} />
		</>
	)
}
