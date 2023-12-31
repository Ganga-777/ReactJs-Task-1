// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

//------------------------------------------------------------------------------------------------------

import React, { useState } from 'react';
import './App.css'; // Make sure to import your CSS file

function App() {
  const [paragraph, setParagraph] = useState('');

  const wordCount = paragraph.split(/\s+/).filter(word => word !== '').length;

  const handleParagraphChange = (e) => {
    setParagraph(e.target.value);
  };

  return (
    <div className="App">
      <div className="main-container">
        <div className="white-box">
          <h1>Responsive Paragraph Word <br /> Counter</h1>
            <textarea
              placeholder="Type your paragraph here..."
              value={paragraph}
              onChange={handleParagraphChange}
              style={{ width: '100%', minHeight: '120px', border: '2px solid black', borderRadius: '4px',}}
            />
          <p>Word Count: {wordCount}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
