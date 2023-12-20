
function generateMessage() {
    var name = document.getElementById('name').value;
    var message = document.getElementById('message').value;
    var birthdayMessage = `Happy Birthday, ${name}`;
    var birthdaynote=`Dear ${name}, \n ${message}`;
    
    document.getElementById('birthdayMessage').innerText = birthdayMessage;
    document.getElementById('birthdaynote').innerText = birthdaynote;
}



