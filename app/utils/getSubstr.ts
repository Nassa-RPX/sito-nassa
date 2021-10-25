export const getSubstr = (str: string, char = '/'): string => {
	return str.substr(0, str.lastIndexOf(char))
}
