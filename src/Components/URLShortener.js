import React, { useState } from 'react';

const URLShortener = () => {
  const [originalURL, setOriginalURL] = useState('');
  const [shortenedURL, setShortenedURL] = useState('');

  const handleShortenURL = () => {
    // Implement URL shortening logic here
  };

  return (
    <div>
      <h2>URL Shortener</h2>
      <form>
        <label>Original URL:</label>
        <input type="url" value={originalURL} onChange={(e) => setOriginalURL(e.target.value)} />
        <button type="button" onClick={handleShortenURL}>Shorten URL</button>
      </form>
      {shortenedURL && (
        <div>
          <p>Shortened URL:</p>
          <a href={shortenedURL} target="_blank" rel="noopener noreferrer">{shortenedURL}</a>
        </div>
      )}
    </div>
  );
};

export default URLShortener;
