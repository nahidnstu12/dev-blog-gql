export const subExcerpt = (str,len=250) => {
return len < str.length ? str.substr(0, len) + "..." : str.substr(0, len);
}