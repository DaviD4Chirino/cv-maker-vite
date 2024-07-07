import { useContext } from "react";
import "./App.css";
import { DataContext } from "./contexts/dataContext";

function App() {
  const { data, setData } = useContext(DataContext);

  return (
    <div className="">
      {data.personal_information.full_name}
      <button
        onClick={() =>
          setData({
            ...data,
            personal_information: {
              ...data.personal_information,
              full_name: "asdasd",
            },
          })
        }
      >
        Click Me
      </button>
    </div>
  );
}

export default App;
