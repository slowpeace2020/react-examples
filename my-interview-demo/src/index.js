import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const style = {
    letterContainer: {
        overflow: 'auto',
        marginBottom: '10px',
    },
    letter: {
        float: 'left',
        padding: '10px',
        background: '#c94ed',
        borderRadius: '5px',
        marginRight: '5px',
        cursor: 'pointer',
    }
};

function Tile({ letter, onClick }) {
    return (
        <button style={style.letter} onClick={() => onClick(letter)}>
            {letter}
        </button>
    );
}

function Application() {
    const [output, setOutput] = useState('');

    const handleClick = (letter) => {
        const newOutput = output + letter;
        const updatedString = replaceConsecutiveLetters(newOutput);
        setOutput(updatedString);
    };

    const replaceConsecutiveLetters = (str) => {
        // First replace six consecutive letters with an underscore
        let newStr = str.replace(/([A-Z])\1\1/g, '_');

        // Then replace three consecutive letters (not including those replaced by previous pattern) with an underscore
        // newStr = newStr.replace(/(?<!^_)\1{2}/g, '_');
        return newStr;
    };

    return (
        <section>
            <aside style={style.letterContainer} id="letterContainer">
                {Array.from({ length: 26 }, (_, i) => (
                    <Tile key={i} letter={String.fromCharCode(65 + i)} onClick={handleClick} />
                ))}
            </aside>
            <div id="outputString">{output}</div>
        </section>
    );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Application />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
