import { useState, useEffect, useRef } from 'react'
import { useCreateEmail } from '@hooks/useCreateEmail'
import { IconCopy, IconRefresh, IconTranslate } from '@components/icons'

export function ListEmails({ content, prompt }) {
	const [copy, setCopy] = useState('Copy')
	const [textContent, setTextContent] = useState('')
	const resultRef = useRef(null)

	const [loadingChangeContent, setLoadingChangeContent] = useState(false)
	const [errorTranslate, setErrorTranslate] = useState(null)

	const { sendPrompt } = useCreateEmail()

	useEffect(() => {
		setTextContent(content)
		setErrorTranslate(null)
		resultRef.current?.scrollIntoView({ behavior: 'smooth' })
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
					<h3 className='mt-9 text-left text-xl font-medium text-gray-900 dark:text-white'>
						Generated text
					</h3>
					<article className='pt-5 pb-10'>
						<pre className='font-inherit cursor-text whitespace-pre-wrap break-normal rounded-lg border border-gray-100 p-3 text-lg  text-gray-500 shadow-sm hover:bg-gray-200 hover:text-gray-600 focus:outline-none focus:ring dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300'>
							{textContent}
						</pre>
						{errorTranslate && <p className='m-0 font-bold text-red-500'>{errorTranslate}</p>}
						<div className='mt-4 flex gap-2' ref={resultRef}>
							<button
								onClick={() => copyEmail(textContent)}
								type='button'
								className='mr-2 mb-2 flex items-center gap-2 rounded-lg bg-gray-100 px-5 py-2 text-center text-sm text-gray-700 shadow-md hover:bg-blue-500 hover:fill-white hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-gray-700 dark:text-white  dark:shadow-sm dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800'
							>
								<IconCopy />
								{copy}
							</button>
							<a
								target='_blank'
								rel='noreferrer'
								href={`https://www.deepl.com/es/translator#en/es/${textContent}`}
								className='mr-2 mb-2 flex items-center gap-2 rounded-lg bg-gray-100 px-5 py-2 text-center text-sm text-gray-700 shadow-md hover:bg-blue-500  hover:fill-white hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-gray-700  dark:text-white dark:shadow-sm dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800'
							>
								<IconTranslate />
								Translate in DeepL
							</a>
							<button
								disabled={loadingChangeContent}
								onClick={() => changeResult()}
								type='button'
								className='mr-2 mb-2 flex items-center gap-2 rounded-lg bg-gray-100 px-5 py-2 text-center text-sm text-gray-700 shadow-md hover:bg-blue-500 hover:fill-white hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-gray-700 dark:text-white  dark:shadow-sm dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800'
							>
								<IconRefresh />
								{loadingChangeContent ? 'loading...' : 'change result'}
							</button>
						</div>
					</article>
				</>
			)}
		</section>
	)
}
