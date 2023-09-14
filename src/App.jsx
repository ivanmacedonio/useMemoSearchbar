import { useState } from "react";
import { Searchbar } from "./components/Searchbar";

const people = [
  {
    id: "people-01",
    title: "Juan perez",
  },
  {
    id: "people-02",
    title: "Marcos perez",
  },
  {
    id: "people-03",
    title: "Roman temes",
  },
  {
    id: "people-04",
    title: "Marcos dicesare",
  },
  {
    id: "people-05",
    title: "Ivan macedonio",
  },
];

const calendar = [
  {
    id: "calendar-01",
    title: "Viajar",
  },
  {
    id: "calendar-02",
    title: "Asistir a clase",
  },
  {
    id: "calendar-03",
    title: "Limpiar el auto",
  },
  {
    id: "calendar-04",
    title: "Modificar el codigo",
  },
  {
    id: "calendar-05",
    title: "Arreglar la pc",
  },
];

function App() {
  const [data, setData] = useState([...people, ...calendar]);

  const [selection, setSelection] = useState(null);

  const [currentOpction, setCurrentOption] = useState("all");

  const handleClick = (e) => {
    const op = e.target.name;

    switch (op) {
      case "all":
        setData([...people, ...calendar]);
        setCurrentOption("all");
        break;
      case "people":
        setData([...people]);
        setCurrentOption("people");
        break;
      case "calendar":
        setData([...calendar]);
        setCurrentOption("calendar");
        break;

      default:
    }
  };
  return (
    <>
      <button onClick={handleClick} name="all">
        All
      </button>
      <button onClick={handleClick} name="people">
        People
      </button>
      <button onClick={handleClick} name="calendar">
        Calendars
      </button>
      <div>
        <h1>Current : {currentOpction}</h1>
      </div>
      <div>
        <Searchbar items={data} onItemSelected={() => {}}/>
      </div>
      <div>
        
      </div>
    </>
  );
}

export default App;
