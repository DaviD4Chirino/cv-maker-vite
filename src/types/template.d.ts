interface TemplateState {
  id: number;
  selectedTemplate: string;
  setSelectedTemplate: (new_template: string) => void;
  /** The template with changes */
  currentTemplate: string;
}

type Change = {
  owner: string;
  replace: string | RegExp;
  replacement: string;
};
