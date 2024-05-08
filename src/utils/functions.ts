
/**
 * Slices a text string to a specified maximum length and adds ellipsis if necessary.
 * @param {string} text - The text to be sliced.
 * @param {number} [max=50] - The maximum length of the sliced text. Defaults to 50.
 * @returns {string} The sliced text with ellipsis added if the original text exceeds the maximum length.
 */
export function textSlice (text:string,max:number =50){
    if (text.length >= max)  return `${text.slice(0,max)}...`;
    
    return text
}