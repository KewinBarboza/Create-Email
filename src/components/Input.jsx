import { Label } from './Label'

export default function Input({ id, label, type = 'text', placeholder, nameInput }) {
	return (
		<div className='mb-4 w-full'>
			<Label htmlFor={id} title={label} />
			<div className='relative'>
				<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2'>
					<svg
						width='28px'
						height='28px'
						strokeWidth='1.29'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						color='#1a88ff'
					>
						<path
							d='M5 20v-1a7 7 0 017-7v0a7 7 0 017 7v1M12 12a4 4 0 100-8 4 4 0 000 8z'
							stroke='#1a88ff'
							strokeWidth='1.29'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</div>
				<input
					type={type}
					id={id}
					className='block w-full rounded-lg border border-gray-300 bg-white p-4 pl-10 text-sm text-gray-900 shadow-md focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
					placeholder={placeholder}
					name={nameInput}
				/>
			</div>
		</div>
	)
}
