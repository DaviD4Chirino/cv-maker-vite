interface TemplateState {
  id: number;
  selectedTemplate: string;
  setSelectedTemplate: (new_template: string) => void;
  /** The template with changes */
  currentTemplate: string;

  changes: Change[];
  addChange: (change: Change) => void;
}

type Change = {
  owner: string;
  replace: string | RegExp;
  replacement: string;
};
