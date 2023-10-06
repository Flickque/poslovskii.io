module.exports = {
	extends: [
		'plugin:astro/recommended',
		'plugin:svelte/recommended',
		"plugin:tailwindcss/recommended",
	],
	overrides: [
		{
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			rules: {
				'astro/no-conflict-set-directives': 'error',
				'astro/no-unused-define-vars-in-style': 'error'
			}
		}
	]
}
