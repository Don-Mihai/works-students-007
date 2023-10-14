import {showNotification} from './utils.js'

const button = document.querySelector('.button')

button.onclick = () => showNotification('Всплывающее уведомление', 'warning', 5000)
