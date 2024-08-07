import React, { useState } from 'react';

export default function StockData(){
    const [date, setDate] = useState('');
    const [stockData, setStockData] = useState(null);
    const [error, setError] = useState(null);

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleSearch = async () => {
        if (date === '') {
            setError('Please enter a date.');
            return;
        }

        try {
            const response = await fetch(`https://jsonmock.hackerrank.com/api/stocks?date=${date}`);
            const data = await response.json();
            if (data.data.length > 0) {
                setStockData(data.data[0]);
                setError(null);
            } else {
                setStockData(null);
                setError('No results found.');
            }
        } catch (err) {
            setError('Error fetching data.');
        }
    };

    return (
        <div data-testid="app-input">
            <input
                type="text"
                value={date}
                onChange={handleDateChange}
                placeholder="Enter date (d-MMMM-yyyy)"
                data-testid="app-input"
            />
            <button onClick={handleSearch} data-testid="submit-button">Search</button>
            {error && <div data-testid="no-result">{error}</div>}
            {stockData && (
                <ul data-testid="stock-data">
                    <li>Open: {stockData.open}</li>
                    <li>High: {stockData.high}</li>
                    <li>Low: {stockData.low}</li>
                    <li>Close: {stockData.close}</li>
                </ul>
            )}
        </div>
    );
};


