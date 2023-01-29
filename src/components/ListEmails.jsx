export function ListEmails ({ content }) {
  if (!content) return null

  return (
    <>
      <h3 className='mt-9 px-52 text-center text-xl font-medium text-gray-900 dark:text-white'>
        Resultados
      </h3>
      <ul>
        {content.map((c, index) => (
          <li key={index} className='py-10 border-y-2 px-3 border-gray-600'>
            <pre
              contentEditable='true'
              className='text-lg break-normal font-inherit whitespace-pre-wrap cursor-text focus:outline-none focus:ring p-3 text-gray-500 border-2 border-gray-900 rounded-lg dark:hover:text-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700'
            >
              {c}
            </pre>
            <div className='mt-4 gap-2'>
              <button
                type='button'
                className='text-gray-700 hover:text-white border-2 border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 dark:border-blue-500 dark:text-white dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800'
              >
                Copiar
              </button>
              <button
                type='button'
                className='text-gray-700 hover:text-white border-2 border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 mb-2 dark:border-blue-500 dark:text-white dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800'
              >
                Guardar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
