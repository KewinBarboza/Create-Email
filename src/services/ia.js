// const { PUBLIC_URL_API_COHERE, SECRET_PASSWORD_COHERE } = import.meta.env
const { PUBLIC_URL_API_COHERE, PUBLIC_PASSWORD_COHERE } = import.meta.env

export const getText = async ({ typeEmail, descriptionMessage, tone, forMessage }) => {
	const prompt = typeEmail
		? `write an ${typeEmail} email for ${forMessage} narrating ${descriptionMessage} with a ${tone}`
		: `write a description with a tone ${tone} of a ${forMessage} with the following characteristics ${descriptionMessage}`

	console.log(prompt)
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
			prompt,
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
