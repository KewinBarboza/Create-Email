
export function CardRadio ({ title, description, name, prompt, id, icon }) {
  return (
    <>
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
        className='inline-flex justify-between w-full h-full p-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'
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
    </>
  )
}
