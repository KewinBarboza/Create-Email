const COHERE_API_KEY = 'a0Ivb7PHmXIXq9Xd0x8UPow47Ul3w8upUiE5Tqea'
const COHERE_API_GENERATE_URL = 'https://api.cohere.ai/generate'

export const getEmail = async ({ typeEmail, descriptionMessage, tone, forMessage }) => {
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
			prompt: `${typeEmail} ${descriptionMessage} ${tone} ${forMessage}`,
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
	return response.generations[0].text
	// const splitResponse = response.generations[0].text.split('\n')
	// return Array.from(new Set([...splitResponse])).filter((text) => text !== '')
}
