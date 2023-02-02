import { TONE } from '@constants/index.js'
import { Input } from '@components/Input.jsx'
import { TextArea } from '@components/TextArea.jsx'
import { ContainerStep } from '@components/ContainerStep.jsx'
import { CardRadio } from '@components/CardRadio.jsx'

export function FormProductDescription({ handleSubmit, error, isLoading }) {
	return (
		<form onSubmit={handleSubmit} className='flex w-full flex-col'>
			<ContainerStep step={1}>
				<Input
					label={'Product name'}
					placeholder={'Smartphone'}
					nameInput={'for-message'}
					id={'for-message'}
				/>
			</ContainerStep>

			<ContainerStep step={2}>
				<TextArea
					label={'Product characteristics'}
					placeholder={'characteristics of product'}
					nameInput={'description-message'}
					id={'description-message'}
				/>
			</ContainerStep>

			<ContainerStep step={3}>
				<CardRadio label={'Select a tone'} options={TONE} />
			</ContainerStep>

			{error && (
				<p className='ml-10 rounded-md bg-red-300/75 p-2 text-center text-red-600'>{error}</p>
			)}
			<button
				disabled={isLoading}
				type='submit'
				className={`py-2.5 px-5 text-sm font-medium ${
					isLoading ? 'bg-gray-500 hover:bg-gray-500 ' : 'bg-blue-700 hover:bg-blue-800 '
				} my-6 rounded-lg  text-center text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900`}
			>
				{isLoading ? 'Creating description...' : 'Create description'}
			</button>
		</form>
	)
}
