import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
//core
import 'primereact/resources/primereact.min.css'
//icons
import 'primeicons/primeicons.css'
//theme
import 'primereact/resources/themes/bootstrap4-dark-purple/theme.css' 
import 'primeflex/primeflex.css'
    




ReactDOM.render(
    <App />,
    //elemnto html cujo id é root
    document.querySelector('#root')
)

