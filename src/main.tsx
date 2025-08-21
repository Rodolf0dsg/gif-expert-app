import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { GifsApp } from './GifsApp'
// import { MyCounterApp } from './counter/components/MyCounterApp';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GifsApp/>
        {/* <MyCounterApp/> */}
    </React.StrictMode>,
)
