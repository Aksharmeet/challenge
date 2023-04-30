const convertIntoNumber = (str) => {
	return str.replace(/(?!^)-|[^\d.-]+/g, '')
}

export default convertIntoNumber
