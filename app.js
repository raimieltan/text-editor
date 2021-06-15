//algorithms

function search(text, pattern) {
    let textLenght = text.length
    let window = pattern.length


    for (let i = 0; i <= textLenght - window; i++) {
        let j = 0
        for (j = 0; j < window; j++) {
            if (text[i + j] !== pattern[j]) {

                break;
            }
        }

        if (j == window) {

            return i

        }


    }
}


const elements = document.querySelectorAll('.btn');

//event
elements.forEach(element => {
    element.addEventListener('click', () => {
        let command = element.dataset['element']


        if (command === 'createLink' || command == 'insertImage') {
            let url = prompt('Enter the link here:', 'http://')
            document.execCommand(command, false, url)
        }

        else if (command === 'fontSize') {
            let size = prompt('Enter from 1-7', ' ')
            document.execCommand(command, false, size)
        }
        else {

            document.execCommand(command, false, null);

        }

    })
})


const downloadToFile = (content, filename, contentType) => {
    const a = document.createElement('a');
    const file = new Blob([content], { type: contentType });

    a.href = URL.createObjectURL(file);
    a.download = filename;
    a.click();

    URL.revokeObjectURL(a.href);
};



document.querySelector('#btnTest').addEventListener('click', () => {
    const textArea = document.querySelector('#text-box').innerHTML;

    downloadToFile(textArea, 'my-new-file.html', 'text/plain');

});



document.querySelector('#search').addEventListener('click', () => {
    const textArea = document.querySelector('#text-box').innerHTML;
    const findText = document.querySelector('#find-text').value
    let index = search(textArea, findText)
    let firstHalf = textArea.slice(0, index)
    let secondHalf = textArea.slice(index + findText.length, textArea.length)
    let replace = document.querySelector('#replace-text').value
    if(replace === ""){
        replace = `<mark>${findText}</mark>`
    }

    document.querySelector('#text-box').innerHTML = firstHalf + replace + secondHalf



    
})




document.querySelector('#text-box').addEventListener('input', () => {

    const textArea = document.querySelector('#text-box').innerHTML;
    console.log(textArea)
    let lastWord = textArea.split(' ')
    lastWord = lastWord[lastWord.length - 1]
       

  
    const commonWords = ["the", "of", "and", "a", "to", "in", "is", "you", "that", "it", "he", "was", "for", "on", "are", "as", "with", "his", "they", "I", "at", "be", "this", "have", "from", "or", "one", "had", "by", "word", "but", "not", "what", "all", "were", "we", "when", "your", "can", "said", "there", "use", "an", "each", "which", "she", "do", "how", "their", "if", "will", "up", "other", "about", "out", "many", "then", "them", "these", "so", "some", "her", "would", "make", "like", "him", "into", "time", "has", "look", "two", "more", "write", "go", "see", "number", "no", "way", "could", "people", "my", "than", "first", "water", "been", "call", "who", "oil", "its", "now", "find", "long", "down", "day", "did", "get", "come", "made", "may", "part"];

    let filteredWords = commonWords.filter((element) => {
        return element.includes(lastWord)
    })


    document.querySelector('.prediction').innerHTML = filteredWords.map( (item) => {

    
            return (
                `<button id="predictive-button">${item}</button>`                  
            )

    }).slice(0, 10).join('')

    const elements = document.querySelectorAll('#predictive-button');

    //event
    elements.forEach(element => {
        element.addEventListener('click', () => {
           
            document.querySelector('#text-box').innerHTML = document.querySelector('#text-box').innerHTML.slice(0,-1 * (lastWord.length )) +"  "+ element.innerHTML
    
        })
    })

})



document.querySelector('#html-file').addEventListener('change', () => {
    let file = document.querySelector('#html-file').files[0]
    console.log(file)

    let reader = new FileReader()

    reader.readAsText(file)

    reader.onload = () =>{
        document.querySelector("#text-box").innerHTML =reader.result
    }
})