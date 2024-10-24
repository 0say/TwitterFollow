/* eslint-disable no-unused-vars */
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const root = createRoot(document.getElementById('root'))
root.render(
    <App />
)
