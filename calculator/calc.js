var display = document.getElementById('display');
var answer = document.getElementById('answers');

display.textContent = '';

var numbers = Array.from(document.getElementsByClassName('button'));


numbers.map(function(number) {
    number.addEventListener('click', function(event) {

        
       switch (event.target.textContent) {

        case 'C':
            if(display.textContent) {
                display.textContent = display.textContent.slice(0, -1);
            }
            break;

        case 'CE':
            display.textContent = '';
            answer.textContent = '';
            break;

        case '=':
            try{
                answer.textContent = eval(display.textContent);
            } catch {
                display.textContent = 'Error!!!';
            }
            break;
            

        default:
            display.textContent += event.target.textContent;
       }

       if(display.textContent.length >= 50 && event.target.textContent) {
            display.textContent = '';
            display.textContent = 'Max Limit reached     ';
            
            if(display.textContent === 'Max Limit reached' && display.textContent.includes(event.target.textContent)) {
                display.textContent = '';
            }
            
            
        } 
    });


});

