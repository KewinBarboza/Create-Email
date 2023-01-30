import { Label } from './Label'

export function CardRadio({ options = [], label }) {
	return (
		<div className='mb-4 w-full'>
			<Label htmlFor={''} title={label} />
			<ul className='grid w-full grid-cols-1 place-content-stretch gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
				{options.map(({ title, name, prompt, id, icon }) => (
					<li key={id}>
						<input
							type='radio'
							name={name}
							id={id}
							value={prompt}
							className='peer hidden'
							required=''
						/>

						<label
							htmlFor={id}
							className='inline-flex h-full w-full cursor-pointer justify-between rounded-lg border-2 border-gray-200 bg-white p-3 text-gray-500 shadow-md hover:bg-gray-50 hover:text-gray-600 peer-checked:border-blue-600 peer-checked:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-white'
						>
							<div className='flex items-center'>
								<div>
									<g dangerouslySetInnerHTML={{ __html: icon }} />
								</div>
								<div className='ml-5'>
									<div className='w-full text-sm font-semibold'>{title}</div>
								</div>
							</div>
						</label>
					</li>
				))}
			</ul>
		</div>
	)
}
