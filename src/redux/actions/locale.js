export const localeSet = lang => ({
	type: 'LOCALE_SET',
	lang
})

export const setLocale = lang => dispatch => {
	localStorage.professionLang = lang;
	dispatch(localeSet(lang));
}