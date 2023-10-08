const buttons = document.querySelectorAll('button');
const answers = document.querySelectorAll('.answer');

// Event listeners
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        // Make sure to target the specific answer corresponding to the clicked button
        const answer = answers[i];
        
        // Toggle the answer's height and display
        if (answer.style.height === '100px') {
            answer.style.height = '0';
            answer.style.display = 'none';
            
        } else {
            answer.style.height = '100px';
            answer.style.display = 'block';
           
        }
    });
}
