import { useContext } from "react";
import "./App.css";
import { DataContext } from "./contexts/dataContext";
import FormPage from "./modules/formPage";
import TemplateViewer from "./modules/TemplateViewer";

function App() {
  const { data } = useContext(DataContext);

  const steps = Object.keys(data);

  return (
    <section id="Main" className="w-full h-[100vh] grid grid-cols-2">
      <FormPage steps={steps} />
      <TemplateViewer />
    </section>
  );
}

export default App;
