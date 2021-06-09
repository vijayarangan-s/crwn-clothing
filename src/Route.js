import React from 'react'
import App from './App'
import {BrowserRouter} from 'react-router-dom'

export default function Route() {
    return (
        <div>
            <BrowserRouter>
                <App/> 
            </BrowserRouter>
        </div>
    )
}
