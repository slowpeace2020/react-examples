import React, { useState } from 'react';
import Draggable from 'react-draggable';

const ProgressBar = ({ progress, onProgressChange }) => {
    const handleDrag = (e, ui) => {
        const { x } = ui;
        const progressBarWidth = e.target.parentElement.offsetWidth;
        const newProgress = Math.max(0, Math.min(x / progressBarWidth, 1));
        onProgressChange(newProgress);
    };

    return (
        <div style={{ width: '300px', height: '20px', border: '1px solid black', position: 'relative', marginBottom: '20px' }}> {/* 添加 marginBottom */}
            <div
                style={{
                    width: `${progress * 100}%`,
                    height: '100%',
                    backgroundColor: 'blue',
                }}
            />
            <Draggable
                axis="x"
                bounds="parent"
                onDrag={handleDrag}
            >
                <div
                    style={{
                        width: '10px',
                        height: '100%',
                        backgroundColor: 'red',
                        position: 'absolute',
                        cursor: 'ew-resize',
                        zIndex: 1,
                    }}
                />
            </Draggable>
        </div>
    );
};

export default ProgressBar;
