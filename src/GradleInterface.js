import React, { useState } from 'react';

function App() {
    const [imageUrl, setImageUrl] = useState('');
    const [question, setQuestion] = useState('');
    const [result, setResult] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('image', imageUrl);
        formData.append('question', question);

        try {
            const response = await fetch('http://localhost:5000/predict', {
    method: 'POST',
    headers: {
        // Specify the correct Content-Type for FormData
        'Content-Type': 'multipart/form-data',
    },
    body: formData,
});


            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            setResult(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h1>Donut Demo</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Image URL:
                    <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                </label>
                <br />
                <label>
                    Question:
                    <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
            {result && (
                <div>
                    <h2>Result:</h2>
                    <p>{JSON.stringify(result)}</p>
                </div>
            )}
        </div>
    );
}

export default App;
