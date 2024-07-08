"use client";
import React, { createContext, useEffect, useState } from "react";

const initialValue: TemplateState = {
  id: 0,
  // originalTemplate: "",
  // setOriginalTemplate: (text: string) => {},
  selectedTemplate: "",
  setSelectedTemplate: (new_template: string) => {},
  currentTemplate: "",
  // setSelectedTemplate: (newTemplate: Template) => {},
  changes: [],
  // setChanges: (newChanges: Change[]) => {},
  addChange: (change: Change) => {},
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
  const [changes, setChanges] = useState<Change[]>(initialValue.changes);

  useEffect(() => {
    setCurrentTemplate(selectedTemplate);
    return () => {};
  }, [selectedTemplate]);

  useEffect(() => {
    console.log(changes);
    updateCurrentTemplateChanges();
    return () => {};
  }, [changes]);

  function updateCurrentTemplateChanges() {
    let newText = selectedTemplate;
    for (const change of changes) {
      newText = newText.replace(change.replace, change.replacement);
    }
    setCurrentTemplate(newText);
  }

  function addChange(change: Change) {
    const exist: number = changes.findIndex(
      (value: Change) => value.owner == change.owner
    );
    if (exist != -1) {
      const modifiedChanges: Change[] = changes;
      modifiedChanges[exist] = change;
      setChanges(modifiedChanges);
    } else {
      setChanges([...changes, change]);
    }

    updateCurrentTemplateChanges();
  }

  const newValue = {
    id: 0,
    selectedTemplate,
    setSelectedTemplate,
    currentTemplate,
    changes,
    addChange,
    // 	originalTemplate,
    // 	setOriginalTemplate,
    // 	currentTemplate,
    // 	setCurrentTemplate,
    // 	selectedTemplate,
    // 	setSelectedTemplate,
    // 	changes,
    // 	setChanges,
    // 	addChange,
  };

  return (
    <TemplateContext.Provider value={newValue}>
      {children}
    </TemplateContext.Provider>
  );
}

export { TemplateContext, TemplateStateProvider };
