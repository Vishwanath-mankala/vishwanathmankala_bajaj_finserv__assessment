import React, { useState } from 'react';

function App() {
    const [jsonData, setJsonData] = useState('');
    const [response, setResponse] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleSubmit = async () => {
        try {
            const res = await fetch('https://your-backend-url.herokuapp.com/bfhl', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: jsonData,
            });
            const data = await res.json();
            setResponse(data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleOptionChange = (e) => {
        const { options } = e.target;
        const selected = [];
        for (let i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                selected.push(options[i].value);
            }
        }
        setSelectedOptions(selected);
    };

    const renderResponse = () => {
        if (!response) return null;

        return (
            <div>
                {selectedOptions.includes('numbers') && (
                    <div>
                        <h3>Numbers:</h3>
                        <p>{response.numbers.join(', ')}</p>
                    </div>
                )}
                {selectedOptions.includes('alphabets') && (
                    <div>
                        <h3>Alphabets:</h3>
                        <p>{response.alphabets.join(', ')}</p>
                    </div>
                )}
                {selectedOptions.includes('highest_lowercase_alphabet') && (
                    <div>
                        <h3>Highest Lowercase Alphabet:</h3>
                        <p>{response.highest_lowercase_alphabet.join(', ')}</p>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="App">
            <h1>{/* Your Roll Number Here */}</h1>
            <textarea
                rows="4"
                cols="50"
                value={jsonData}
                onChange={(e) => setJsonData(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>

            <select multiple={true} value={selectedOptions} onChange={handleOptionChange}>
                <option value="numbers">Numbers</option>
                <option value="alphabets">Alphabets</option>
                <option value="highest_lowercase_alphabet">Highest Lowercase Alphabet</option>
            </select>

            {renderResponse()}
        </div>
    );
}

export default App;