import "./App.css";
import Card from "./components/Card";
function App() {
  return (
    <>
      <h1 className=" text-5xl bg-white text-black mb-4">Hello World!</h1>
      <Card userName="tatai" btnText="click me" />
      <Card userName="tatai" btnText="visit me" />
    </>
  );
}

export default App;
