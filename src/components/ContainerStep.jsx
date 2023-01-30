export function ContainerStep({ children, step }) {
	return (
		<section className='relative mb-6 flex flex-1 items-start duration-500'>
			<span className='mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#1d4fd846] text-center font-bold text-blue-700'>
				{step}
			</span>
			{children}
		</section>
	)
}
