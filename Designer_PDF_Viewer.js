function designerPdfViewer(h, word) {
    // Write your code here
    let alphabet = String.fromCharCode(...Array(123).keys()).slice(97);
    let wordHeight = [];

    for (let i = 0; i < word.length; i++){
        let index = alphabet.indexOf(word[i]);
        wordHeight.push(h[index]);
    }
    return Math.max(...wordHeight) * word.length;
}