import { CardRadio } from './CardRadio.jsx'
import { OPTIONS, TONE } from '../constants'
import { useState } from 'react'
import { ListEmails } from './ListEmails.jsx'

const COHERE_API_KEY = 'a0Ivb7PHmXIXq9Xd0x8UPow47Ul3w8upUiE5Tqea'
const COHERE_API_GENERATE_URL = 'https://api.cohere.ai/generate'

export function Form () {
  const [emails, setEmails] = useState([])
  const getValueInput = (e, nameInput) => e.target[nameInput].value

  const handleSubmit = async (e) => {
    e.preventDefault()
    setEmails([])
    const prompt = {
      forMessage: getValueInput(e, 'for-message'),
      descriptionMessage: getValueInput(e, 'description-message'),
      typeEmail: getValueInput(e, 'options-email'),
      tone: getValueInput(e, 'tone')
    }

    const result = await fetch(COHERE_API_GENERATE_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `BEARER ${COHERE_API_KEY}`,
        'Content-Type': 'application/json',
        'Cohere-Version': '2022-12-06'
      },
      body: JSON.stringify({
        model: 'command-xlarge-nightly',
        prompt: `${prompt.typeEmail} ${prompt.descriptionMessage} ${prompt.tone} ${prompt.forMessage}`,
        max_tokens: 300,
        temperature: 0.9,
        k: 0,
        p: 0.75,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop_sequences: ['--'],
        return_likelihoods: 'NONE'
      })
    })

    const response = await result.json()
    const splitResponse = response.generations[0].text.split('\n')
    setEmails(Array.from(new Set([...splitResponse])).filter(text => text !== ''))

    console.log(Array.from(new Set([...splitResponse])).filter(text => text !== ''))
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='flex justify-center flex-col'>
        <div className='mb-4'>
          <label
            htmlFor='input-group-1'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Seleccione el tipo de correo
          </label>
          <ul className='grid w-full gap-6 place-content-stretch md:grid-cols-3'>
            {
        OPTIONS.map(({ title, name, prompt, id, icon }) => (
          <li key={id}>
            <CardRadio
              title={title}
              name={name}
              prompt={prompt}
              id={id}
              icon={icon}
            />
          </li>
        ))
      }
          </ul>
        </div>

        <div className='my-4'>
          <label
            htmlFor='input-group-1'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            ¿Para quién es el mensaje?
          </label>
          <div className='relative'>
            <div
              className='absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none'
            >
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
              type='text'
              id='input-group-1'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-4 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Tom, mi cordinador'
              name='for-message'
            />
          </div>
        </div>

        <div className='my-4'>
          <label
            htmlFor='input-group-1'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            ¿Por qué te gustaría agradecerles?
          </label>
          <div className='relative'>
            <div
              className='absolute inset-y-0 left-0 flex items-start pt-3 pl-2 pointer-events-none'
            >
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
              id='message'
              rows='4'
              className='block pl-10 p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Write your thoughts here...'
              name='description-message'
            />
          </div>
        </div>

        <div className='my-4'>
          <label
            htmlFor='input-group-1'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Seleccione un tono
          </label>
          <ul className='grid w-full gap-6 place-content-stretch md:grid-cols-3'>
            {
        TONE.map(({ title, name, prompt, id, icon }) => (
          <li key={id}>
            <CardRadio
              title={title}
              name={name}
              prompt={prompt}
              id={id}
              icon={icon}
            />
          </li>
        ))
      }
          </ul>
        </div>

        <button
          type='submit'
          className='px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 my-6'
        >
          Crear correo
        </button>
      </form>

      <ListEmails content={emails} />
    </>

  )
}
