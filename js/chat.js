boxMessages = document.querySelector('.chat-messages')
input = document.querySelector('.input-message')
btnSend = document.querySelector('.btn-send')

messages = []

btnSend.addEventListener('click', () => {
    messages.push(input.value)
    createMessage(input.value)
    input.value = ''
})

function createMessage(msg) {
    message = document.createElement('div')
    username = document.createElement('div')
    text = document.createElement('div')

    message.className = 'message message-receiver'
    username.className = 'username'
    text.className = 'text'

    username.innerHTML = 'Visitante'

    message.append(username)
    message.append(msg)
    boxMessages.appendChild(message)
}