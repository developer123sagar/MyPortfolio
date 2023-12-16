import React, {useState} from 'react'
import '../App.css';

const Cursor = () => {

    const [cursorX, setCursorX] = useState()
    const [cursorY, setCursorY] = useState()

    window.addEventListener('mousemove', (e) => {
        setCursorX(e.clientX)
        setCursorY(e.clientY)
    })

    return (
        <div>
            <div className="cursoroutline" style={{
                left: cursorX + 'px',
                top: cursorY + 'px'
            }}>
            </div>
            <div className="cursordot" style={{
                left: cursorX + 'px',
                top: cursorY + 'px'
            }}>

            </div>
        </div>
    )
}

export default Cursor