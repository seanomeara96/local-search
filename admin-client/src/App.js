import React from "react";
const App = () => {
  return (
    <div>
      <header>
        <nav>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input type="text" placeholder="Look for..." />
            <input type="location" placeholder="in..." />
            <button>Search</button>
          </form>
        </nav>
      </header>
    </div>
  );
};

export default App;
