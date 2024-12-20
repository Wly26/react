import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import Demo from './components/Demo'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<div>
		<Demo/>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</div>,
);