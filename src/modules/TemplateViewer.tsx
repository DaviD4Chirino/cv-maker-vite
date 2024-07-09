import { useContext, useEffect, useRef, useState } from "react";
import { TemplateContext } from "../contexts/templateContext";

export default function TemplateViewer() {
  const { currentTemplate } = useContext(TemplateContext);

  return <iframe srcDoc={currentTemplate} className="w-full h-full"></iframe>;
}
