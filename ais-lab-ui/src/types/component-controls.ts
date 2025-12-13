export type ControlType = "text" | "number" | "boolean" | "select" | "color";

export interface PropControl {
  name: string;
  label?: string;
  type: ControlType;
  options?: string[] | number[]; // for 'select'
  min?: number; // for 'number'
  max?: number; // for 'number'
  step?: number; // for 'number'
  defaultValue?: any;
}

export interface ComponentControllProps {
  id: number | string;
  title?: string;
  description?: string;
  previewText?: string | React.ReactNode;
  component?: React.ComponentType<any>;
  controllers?: PropControl[];
  defaultProps?: Record<string, any>;
  video?: string;
}
