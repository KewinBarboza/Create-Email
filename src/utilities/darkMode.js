// Icons
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon')
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon')

// Theme vars
const ls = window.localStorage
const userTheme = ls.getItem('color-theme')
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (ls.getItem('color-theme') === 'dark' || (!('color-theme' in ls) && systemTheme)) {
	document.documentElement.classList.add('dark')
} else {
	document.documentElement.classList.remove('dark')
}

// Change the icons inside the button based on previous settings
if (userTheme === 'dark' || (!('color-theme' in ls) && systemTheme)) {
	themeToggleLightIcon?.classList.remove('hidden')
} else {
	themeToggleDarkIcon?.classList.remove('hidden')
}

const themeToggleBtn = document.getElementById('theme-toggle')

themeToggleBtn?.addEventListener('click', function () {
	// toggle icons inside button
	themeToggleDarkIcon?.classList.toggle('hidden')
	themeToggleLightIcon?.classList.toggle('hidden')

	// if set via local storage previously
	if (ls.getItem('color-theme')) {
		console.log('first')
		if (ls.getItem('color-theme') === 'light') {
			document.documentElement.classList.add('dark')
			ls.setItem('color-theme', 'dark')
		} else {
			document.documentElement.classList.remove('dark')
			ls.setItem('color-theme', 'light')
		}

		// if NOT set via local storage previously
	} else {
		console.log('first 1')
		if (document.documentElement.classList.contains('dark')) {
			document.documentElement.classList.remove('dark')
			ls.setItem('color-theme', 'light')
		} else {
			document.documentElement.classList.add('dark')
			ls.setItem('color-theme', 'dark')
		}
	}
})
