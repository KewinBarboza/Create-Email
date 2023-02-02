module.exports = {
	// ...
	extends: ['standard', 'plugin:astro/recommended'],
	rules: {
		'no-tabs': 'off',
		indent: 'off',
		'space-before-function-paren': 'off'
	},
	// ...
	overrides: [
		{
			files: ['*.astro', '*.jsx'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				ecmaVersion: 'latest',
				project: './tsconfig.json',
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['*.astro', '*.jsx'],
				ecmaFeatures: {
					jsx: false
				}
			},
			extends: ['plugin:react/recommended'],
			plugins: ['react'],
			rules: {}
		}
	]
}
