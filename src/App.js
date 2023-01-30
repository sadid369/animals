function App() {
  const handleClick = () => {
    console.log("Button was clicked");
  };
  return (
    <div>
      {/* <button onClick={() => handleClick()}>Add Animal</button> */}
      <button onClick={() => console.log("Button Click")}>Add Animal</button>
    </div>
  );
}

export default App;
