import React from 'react'
import { render } from 'react-dom'
/* import io from 'socket.io-client'
 */
import App from './App'
/*
const socket = io('http://localhost:3333')
socket.on('connect', () => console.log('socket conected')) */

render(<App />, document.getElementById('root'))
