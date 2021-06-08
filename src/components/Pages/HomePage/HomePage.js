import React from 'react'
import Directory from '../../Directory/Directory'
import './homepage.style.scss'

export default function HomePage() {
    return (
        <div className="homepage">
            <div className="directory-menu">
                <Directory/>               
            </div>
        </div>
    )
}
