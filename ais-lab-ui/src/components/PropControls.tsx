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
    <div className="bg-base-100/50 backdrop-blur-3xl w-full h-full overflow-y-auto custom-scrollbar">
      <div className="p-6 border-b border-white/5 sticky top-0 bg-base-100/95 backdrop-blur-md z-10 mb-4">
        <h3 className="text-sm font-bold text-base-content/90 flex items-center gap-2 uppercase tracking-widest">
          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px] shadow-blue-500/50"></span>
          Контроллер
        </h3>
      </div>

      <div className="space-y-3 px-4 pb-10">
        {controls.map((control) => (
          <div
            key={control.name}
            className="group bg-white/5 hover:bg-white/[0.07] border border-white/5 rounded-xl p-4 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-semibold text-base-content/50 uppercase tracking-wider group-hover:text-base-content/80 transition-colors">
                {(control.label || control.name)}
              </label>
              {control.type === "number" && (
                <span className="text-xs font-mono bg-black/20 px-2 py-0.5 rounded text-blue-400">
                  {typeof values[control.name] === 'number' ? Number(values[control.name]).toFixed(control.step && control.step < 1 ? 2 : 0) : values[control.name]}
                </span>
              )}
            </div>

            <div className="">
              {control.type === "text" && (
                <Input
                  value={values[control.name] || ""}
                  onChange={(e) => onChange(control.name, e.target.value)}
                  placeholder="Type here..."
                  className="w-full bg-base-200/50 border-white/5 focus:border-blue-500/50 h-9 text-sm"
                />
              )}

              {control.type === "number" && (
                <div className="flex items-center gap-3">
                  <Slider
                    min={control.min ?? 0}
                    max={control.max ?? 100}
                    value={values[control.name] ?? control.defaultValue ?? 0}
                    step={control.step ?? 1}
                    onChange={(e: any) =>
                      onChange(control.name, parseFloat(e.target.value))
                    }
                    className="w-full flex-1"
                  />
                </div>
              )}

              {control.type === "boolean" && (
                <div className="flex items-center justify-between">
                  <span className="text-sm text-base-content/70">
                    {values[control.name] ? "Включено" : "Выключено"}
                  </span>
                  <Toggle
                    checked={!!values[control.name]}
                    onChange={(e) => onChange(control.name, e.target.checked)}
                    className="toggle-primary toggle-sm"
                  />
                </div>
              )}

              {control.type === "select" && control.options && (
                <Select
                  value={values[control.name] || control.defaultValue}
                  onChange={(e) => onChange(control.name, e.target.value)}
                  className="w-full bg-base-200/50 border-white/5 h-9 text-sm focus:border-blue-500/50"
                >
                  {control.options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </Select>
              )}

              {control.type === "color" && (
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-lg border border-white/10 shadow-inner"
                    style={{ backgroundColor: values[control.name] }}
                  />
                  <input
                    type="text"
                    value={values[control.name] || "#000000"}
                    onChange={(e) => onChange(control.name, e.target.value)}
                    className="flex-1 bg-base-200/50 border-white/5 rounded-lg px-3 py-1.5 text-sm font-mono focus:outline-none focus:border-blue-500/50 border transition-all"
                  />
                  <input
                    type="color"
                    value={values[control.name] || "#000000"}
                    onChange={(e) => onChange(control.name, e.target.value)}
                    className="w-8 h-8 opacity-0 absolute cursor-pointer"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
