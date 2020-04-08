import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <p>
        you have click me { count } times.
      </p>
      <button onClick={ () => setCount(count + 1) } >
        CLICK ME
      </button>
    </div>
  );
}

export default App;
