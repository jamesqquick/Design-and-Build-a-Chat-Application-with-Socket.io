const messageTypes = { LEFT: 'left', RIGHT: 'right', LOGIN: 'login' };

//Chat stuff
const chatWindow = document.getElementById('chat');
const messagesList = document.getElementById('messagesList');
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');

//login stuff
let username = '';
const usernameInput = document.getElementById('usernameInput');
const loginBtn = document.getElementById('loginBtn');
const loginWindow = document.getElementById('login');

const messages = []; // { author, date, content, type }

createMessageHTML = message => {
	if (message.type === messageTypes.LOGIN) {
		return `
			<p class="secondary-text text-center mb-2">${
				message.author
			} joined the chat...</p>
		`;
	}
	return `
	<div class="message ${
		message.type === messageTypes.LEFT ? 'message-left' : 'message-right'
	}">
		<div class="message-details flex">
			<p class="flex-grow-1 message-author">${message.author}</p>
			<p class="message-date">${message.date}</p>
		</div>
		<p class="message-content">${message.content}</p>
	</div>
	`;
};

displayMessages = () => {
	const messagesHTML = messages
		.map(message => createMessageHTML(message))
		.join('');
	messagesList.innerHTML = messagesHTML;
};

sendBtn.addEventListener('click', e => {
	e.preventDefault();
	if (!messageInput.value) {
		return console.log('Invalid input');
	}

	const message = {
		author: username,
		date: new Date(),
		content: messageInput.value
	};

	messages.push(message);
	displayMessages();

	//scroll to the bottom
	chatWindow.scrollTop = chatWindow.scrollHeight;

	//clear input
	messageInput.value = '';
});

loginBtn.addEventListener('click', e => {
	e.preventDefault();
	if (!usernameInput.value) {
		return console.log('Must supply a username');
	}

	//set the username and create logged in message
	username = usernameInput.value;
	messages.push({ author: username, type: messageTypes.LOGIN });
	displayMessages();

	//show chat window and hide login
	loginWindow.classList.add('hidden');
	chatWindow.classList.remove('hidden');
});
