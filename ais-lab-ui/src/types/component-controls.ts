export type ControlType = "text" | "number" | "boolean" | "select" | "color";

export interface PropControl {
  name: string;
  label?: string;
  type: ControlType;
  options?: string[]; // for 'select'
  min?: number; // for 'number'
  max?: number; // for 'number'
  step?: number; // for 'number'
  defaultValue?: any;
}

export interface ComponentDataItem {
  id: string; // Unique identifier (slug)
  title: string;
  description: string;
  
  // Motion component specific
  component?: React.ComponentType<any>;
  video?: string;
  
  // Native component specific
  preview?: React.ComponentType<any>; 
  fallback?: React.ReactNode;
  
  // Common
  props?: Record<string, any>; // Default props
  controls?: PropControl[]; // Configuration controls
  category?: string;
  icon?: React.ReactNode;
  
  // For grouping
  items?: ComponentDataItem[];
}

