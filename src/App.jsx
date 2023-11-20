import "./App.css";
import Counter from "./Counter";
import ListDemo from "./ListDemo";
import Timer from "./Timer";

function App() {
  const initialMembers = [
    { name: "Peter", age: 18 },
    { name: "Hanne", age: 35 },
  ];

  return (
    <div>
      <Counter operationValue={5} />

      <ListDemo />

      <Timer />
    </div>
  );
}

export default App;
