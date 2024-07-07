import { ReactNode, createContext, useState } from "react";
const initialValue: DataContext = {
  data: {
    personal_information: {
      full_name: "David Genaro Chirino Chirinos",
      first_name: "",
      second_name: "",
      middle_name: "",
      surname: "",
      email: "",
      phone_number: "",
      location: "",
      portfolio_link: "",
    },
    educational_backgrounds: {
      heading: "",
      contents: [],
    },

    work_experiences: { heading: "", contents: [] },
    skills: { heading: "", contents: [] },
    projects: { heading: "", contents: [] },
    awards: { heading: "", contents: [] },
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setData: (data: DataObject) => {},
};
const DataContext: React.Context<DataContext> = createContext(initialValue);

function DataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<DataObject>(initialValue.data);

  const newValue = {
    data,
    setData,
  };

  return (
    <DataContext.Provider value={newValue}>{children}</DataContext.Provider>
  );
}

export { DataContext, DataProvider };
