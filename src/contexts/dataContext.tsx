import { ReactNode, createContext, useEffect, useState } from "react";
const initialValue: DataContext = {
  data: {
    personal_information: {
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
  const [data, setData] = useState<DataObject>(
    JSON.parse(localStorage.getItem("data")) || initialValue.data
  );

  useEffect(
    () => {
      localStorage.setItem("data", JSON.stringify(data));
      return () => {};
    },
    //eslint-disable-next-line
    [data]
  );

  const newValue = {
    data,
    setData,
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
