import { useContext } from "react";
import "./App.css";
import { DataContext } from "./contexts/dataContext";
import { updateObject } from "./Utils/Utils";

function App() {
  const { data, setData } = useContext(DataContext);

  return (
    <div className="">
      {data.personal_information.full_name}
      <button
        onClick={() =>
          setData(updateObject(data, "personal_information.full_name", "deus"))
        }
      >
        Click Me
      </button>
    </div>
  );
}

export default App;
