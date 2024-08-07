import React, { useState } from 'react';
import { getStockDataByTime } from './services/stock-data';

const StockData = () => {
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

        console.log(`Fetching data for date: ${date}`);
        try {
            const response = await getStockDataByTime(date);
            console.log('Response:', response);
            const data = response.data;
            if (data.data.length > 0) {
                setStockData(data.data[0]);
                setError(null);
            } else {
                setStockData(null);
                setError('No results found.');
            }
        } catch (err) {
            console.error('Error fetching data:', err);
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

export default StockData;
