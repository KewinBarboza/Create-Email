import { useState, useEffect } from 'react'
import { useCreateEmail } from '@hooks/useCreateEmail'

export function ListEmails({ content, prompt }) {
	const [copy, setCopy] = useState('Copy')
	const [textContent, setTextContent] = useState('')

	const [loadingChangeContent, setLoadingChangeContent] = useState(false)
	const [errorTranslate, setErrorTranslate] = useState(null)

	const { sendPrompt } = useCreateEmail()

	useEffect(() => {
		setTextContent(content)
		setErrorTranslate(null)
	}, [content])

	const copyEmail = (text) => {
		if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
			setCopy('Copied!')
			setTimeout(() => setCopy('Copy'), 3000)
			return navigator.clipboard.writeText(text)
		}
		// eslint-disable-next-line prefer-promise-reject-errors
		return Promise.reject('The Clipboard API is not available.')
	}

	const changeResult = async () => {
		try {
			setLoadingChangeContent(true)
			const result = await sendPrompt(prompt)
			setTextContent(result)
			setLoadingChangeContent(false)
		} catch (error) {
			setErrorTranslate('Try again.')
		}
	}

	if (!content) return ''

	return (
		<section>
			{content && (
				<>
					<h3 className='mt-9 px-52 text-center text-xl font-medium text-gray-900 dark:text-white'>
						Generated mail result
					</h3>
					<article className='py-10 px-3'>
						<pre className='font-inherit cursor-text whitespace-pre-wrap break-normal rounded-lg border border-gray-100 p-3  text-lg text-gray-500 hover:bg-gray-200 hover:text-gray-600 focus:outline-none focus:ring dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300'>
							{textContent}
						</pre>
						{errorTranslate && <p className='m-0 font-bold text-red-500'>Try less characters</p>}
						<div className='mt-4 gap-2'>
							<button
								onClick={() => copyEmail(textContent)}
								type='button'
								className='mr-2 mb-2 rounded-lg bg-gray-100 px-5 py-1 text-center text-sm text-gray-700 shadow-md hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-gray-700 dark:text-white  dark:shadow-sm dark:hover:bg-blue-600 dark:hover:text-white dark:focus:ring-blue-800'
							>
								{copy}
							</button>
							<a
								target='_blank'
								rel='noreferrer'
								href={`https://www.deepl.com/es/translator#en/es/${textContent}`}
								className='mr-2 mb-2 rounded-lg bg-gray-100 px-5 py-1 text-center text-sm text-gray-700 shadow-md  hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-gray-700  dark:text-white dark:shadow-sm dark:hover:bg-blue-600 dark:hover:text-white dark:focus:ring-blue-800'
							>
								translate in DeepL
							</a>
							<button
								disabled={loadingChangeContent}
								onClick={() => changeResult()}
								type='button'
								className='mr-2 mb-2 rounded-lg bg-gray-100 px-5 py-1 text-center text-sm text-gray-700 shadow-md hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-gray-700 dark:text-white  dark:shadow-sm dark:hover:bg-blue-600 dark:hover:text-white dark:focus:ring-blue-800'
							>
								{loadingChangeContent ? 'loading...' : 'change result'}
							</button>
						</div>
					</article>
				</>
			)}
		</section>
	)
}
