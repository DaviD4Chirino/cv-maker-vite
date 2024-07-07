import { ReactNode, createContext, useState } from "react";
const initialValue: DataContext = {
  data: {
    personal_information: {
      full_name: "",
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
  getFullName: () => "",
};
const DataContext: React.Context<DataContext> = createContext(initialValue);

function DataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<DataObject>(initialValue.data);

  const newValue = {
    data,
    setData,
    getFullName: () =>
      getFullName(
        data.personal_information.full_name,
        data.personal_information
      ),
  };

  return (
    <DataContext.Provider value={newValue}>{children}</DataContext.Provider>
  );
}

function getFullName(
  full_name: string,
  personal_information: DataObject["personal_information"]
): string {
  return full_name
    ? full_name
    : `${personal_information.first_name} ${personal_information.second_name} ${personal_information.middle_name} ${personal_information.surname}`;
}

export { DataContext, DataProvider };
