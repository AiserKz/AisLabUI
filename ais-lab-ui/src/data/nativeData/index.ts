import { lazy } from "react";

export type ShowcaseItem = {
  id?: number;
  title: string;
  description: string;
  category: string;
  preview: () => React.ReactNode;
  fallback?: React.ReactNode;
  icon?: React.ReactNode;
};

export const LazyTest = lazy(() =>
  import("@ui/Mockup/CodeMockup").then(
    (module) =>
      new Promise<{ default: React.ComponentType<any> }>((resolve) => {
        setTimeout(() => resolve(module), 2000);
      })
  )
);

export { default as inputs } from "./inputs";
export { default as statusItems } from "./status";
export { default as cards } from "./cards";
export { default as buttons } from "./buttons";
export { default as effects } from "./effects";
export { default as mediaItems } from "./media";
