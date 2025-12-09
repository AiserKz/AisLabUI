import { type PropControl } from "@/types/component-controls";
import { Slider, Toggle, Input, Select } from "@ui/index";

interface PropControlsProps {
  controls: PropControl[];
  values: Record<string, any>;
  onChange: (name: string, value: any) => void;
}

export default function PropControls({
  controls,
  values,
  onChange,
}: PropControlsProps) {
  if (!controls || controls.length === 0) return null;

  return (
    <div className="bg-base-200/50 backdrop-blur-md border-l border-white/5 w-full h-full overflow-y-auto p-6">
      <h3 className="text-lg font-bold mb-6 text-base-content/80 flex items-center gap-2">
        <span className="w-1 h-6 bg-primary rounded-full"></span>
        Controls
      </h3>

      <div className="space-y-6">
        {controls.map((control) => (
          <div key={control.name} className="form-control w-full">
            <label className="label py-1">
              <span className="label-text font-medium text-base-content/70">
                {control.label || control.name}
              </span>
              {control.type === "number" && (
                <span className="label-text-alt opacity-50 font-mono">
                  {values[control.name]}
                </span>
              )}
            </label>

            <div className="mt-1">
              {control.type === "text" && (
                <Input
                  value={values[control.name] || ""}
                  onChange={(e) => onChange(control.name, e.target.value)}
                  placeholder="Type here..."
                  className="w-full"
                />
              )}

              {control.type === "number" && (
                <Slider
                  min={control.min ?? 0}
                  max={control.max ?? 100}
                  value={values[control.name] ?? control.defaultValue ?? 0}
                  step={control.step ?? 1}
                  onChange={(e: any) =>
                    onChange(control.name, parseFloat(e.target.value))
                  }
                  className="w-full"
                />
              )}

              {control.type === "boolean" && (
                <Toggle
                  checked={!!values[control.name]}
                  onChange={(e) => onChange(control.name, e.target.checked)}
                  className="toggle-primary"
                />
              )}

              {control.type === "select" && control.options && (
                <Select
                  value={values[control.name] || control.defaultValue}
                  onChange={(e) => onChange(control.name, e.target.value)}
                  className="w-full"
                >
                  {control.options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </Select>
              )}

              {control.type === "color" && (
                <input
                  type="color"
                  value={values[control.name] || "#000000"}
                  onChange={(e) => onChange(control.name, e.target.value)}
                  className="input input-bordered w-full h-10 p-1 cursor-pointer"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
