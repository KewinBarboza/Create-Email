export function TextArea({ id, label, placeholder, nameInput }) {
	return (
		<div className='mb-4 w-full'>
			<label htmlFor={id} className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
				{label}
			</label>
			<div className='relative'>
				<div className='pointer-events-none absolute inset-y-0 left-0 flex items-start pt-4 pl-2'>
					<svg
						width='24px'
						height='24px'
						strokeWidth='1.67'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						color='#1a88ff'
					>
						<path
							d='M9 9c0-3.5 5.5-3.5 5.5 0 0 2.5-2.5 2-2.5 5M12 18.01l.01-.011'
							stroke='#1a88ff'
							strokeWidth='1.67'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L2.5 21.5l4.5-.838A9.955 9.955 0 0012 22z'
							stroke='#1a88ff'
							strokeWidth='1.67'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</div>
				<textarea
					id={id}
					rows='4'
					className='block w-full rounded-lg border border-gray-300 bg-white p-4 pl-10 text-sm text-gray-900 shadow-md focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
					placeholder={placeholder}
					name={nameInput}
				/>
			</div>
		</div>
	)
}
