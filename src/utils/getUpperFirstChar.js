export default function getUpperFirstChar( word = ''){
    return word.charAt(0).toUpperCase() + word.slice(1);
}