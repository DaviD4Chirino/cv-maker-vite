"use client";
import React, { createContext, useEffect, useState, useContext } from "react";
import { DataContext } from "./dataContext";

const initialValue: TemplateState = {
  id: 0,
  selectedTemplate: "",
  setSelectedTemplate: (new_template: string) => {},
  currentTemplate: "",
};

const TemplateContext: React.Context<TemplateState> =
  createContext(initialValue);

function TemplateStateProvider({ children }: { children: any }) {
  const [selectedTemplate, setSelectedTemplate] = useState(
    initialValue.selectedTemplate
  );
  const [currentTemplate, setCurrentTemplate] = useState(
    initialValue.currentTemplate
  );

  const { data, resetValues } = useContext(DataContext);

  function applyChanges() {
    if (!currentTemplate || !selectedTemplate) return;
    let changes = selectedTemplate;

    for (const sectionName in data) {
      const section = data[sectionName];
      // if (section["heading"]) continue;
      // console.log(section);
      //NOTE: apart form personal_information, the rest are arrays
      for (const content in section.contents) {
        const element = section.contents[content];

        // console.log(content, sectionName);
        if (element) {
          const regex = new RegExp(
            `(?<openTag><.*class=["'\`].*${content}.*["'\`]>)\\s*(?<content>.*)\\s*(?<closedTag><\\/.*>)`,
            "g"
          );

          changes = changes.replace(regex, `$1${element}$3`);
        }
      }

      setCurrentTemplate(changes);
    }
  }

  useEffect(
    () => {
      applyChanges();
      return () => {};
    },
    //eslint-disable-next-line
    [data]
  );

  useEffect(() => {
    resetValues();
    setCurrentTemplate(selectedTemplate);
    return () => {};
    //eslint-disable-next-line
  }, [selectedTemplate]);

  useEffect(() => {
    applyChanges();
    return () => {};
    //eslint-disable-next-line
  }, [currentTemplate]);

  const newValue = {
    id: 0,
    selectedTemplate,
    setSelectedTemplate,
    currentTemplate,
  };

  return (
    <TemplateContext.Provider value={newValue}>
      {children}
    </TemplateContext.Provider>
  );
}

export { TemplateContext, TemplateStateProvider };
