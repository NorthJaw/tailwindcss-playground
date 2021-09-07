function App() {
  return (
    <div className="App">
      <p className="text-red-600">Test</p>
      <div className="hover:bg-gray-400 bg-[#1da1f1]">
        <p>Hello</p>
        <div>
          <h2>Testing</h2>
          <div>
            <p>This is another div.</p>
            {["Testing", "Test", "T"].map((x) => {
              console.log("x", x);
              return <p>Value: {x}</p>;
            })}
          </div>
        </div>
      </div>

      <input class="caret-red-500 border-2"></input>
    </div>
  );
}

export default App;
