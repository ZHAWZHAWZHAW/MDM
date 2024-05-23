document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.getElementById('textInput');
    const answerDiv = document.getElementById('answer');
    const answerPart = document.getElementById('answerPart');
    
    function getWordCount(text) {
        // Leerzeichen am Anfang und Ende entfernen und dann die Wörter zählen
        const trimmedText = text.trim();
        if (trimmedText.length === 0) return 0; // Kein Text, keine Wörter
        return trimmedText.split(/\s+/).length; // Teile den Text bei jedem Leerzeichen
    }
    inputField.addEventListener('keyup', function (event) {
        if (event.key === "Enter") {
            // Verhindere das Standardverhalten von Enter, um ein Formularsubmit zu vermeiden
            event.preventDefault();
            const wordCount = getWordCount(inputField.value);
            answerDiv.innerHTML = `The text contains ${wordCount} word(s).`;
            answerPart.style.visibility = 'visible';
        }
    });
});