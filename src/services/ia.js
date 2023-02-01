// const { PUBLIC_URL_API_COHERE, SECRET_PASSWORD_COHERE } = import.meta.env
const { PUBLIC_URL_API_COHERE, PUBLIC_PASSWORD_COHERE } = import.meta.env

export const getEmail = async ({ typeEmail, descriptionMessage, tone, forMessage }) => {
	const result = await fetch(PUBLIC_URL_API_COHERE, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			Authorization: `BEARER ${PUBLIC_PASSWORD_COHERE}`,
			'Content-Type': 'application/json',
			'Cohere-Version': '2022-12-06'
		},
		body: JSON.stringify({
			model: 'command-xlarge-nightly',
			prompt: `write an ${typeEmail} email for ${forMessage} narrating ${descriptionMessage} with a ${tone}`,
			max_tokens: 200,
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
}
