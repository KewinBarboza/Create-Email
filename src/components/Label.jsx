export function Label({ htmlFor, title }) {
	return (
		<label
			htmlFor={htmlFor}
			className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
		>
			{title}
		</label>
	)
}
