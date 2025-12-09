import { useState, useMemo, Suspense } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, RefreshCw, Copy, Check } from "lucide-react";
import { animationsData } from "@/data/animationsData";
import * as nativeData from "@/data/nativeData";
import PropControls from "@/components/PropControls";
import { Background, Loading } from "@ui/index";
import {
  type PropControl,
  type ComponentDataItem,
} from "@/types/component-controls";
import { generateId } from "@/utils/id-helper";

// Helper to flatten animations data for easy lookup
const flatAnimations = animationsData.flatMap((section) => section.items);

// Helper to flatten native data
// We generate IDs dynamically for native items to match URL slugs
const flatNative = [
  ...nativeData.buttons.map((i) => ({
    ...i,
    id: generateId(i.title),
    category: "buttons",
  })),
  ...nativeData.inputs.map((i) => ({
    ...i,
    id: generateId(i.title),
    category: "inputs",
  })),
  ...nativeData.cards.map((i) => ({
    ...i,
    id: generateId(i.title),
    category: "cards",
  })),
  ...nativeData.statusItems.map((i) => ({
    ...i,
    id: generateId(i.title),
    category: "status",
  })),
  ...nativeData.mediaItems.map((i) => ({
    ...i,
    id: generateId(i.title),
    category: "media",
  })),
  ...nativeData.effects.map((i) => ({
    ...i,
    id: generateId(i.title),
    category: "effects",
  })),
];

export default function ComponentView() {
  const { type, id } = useParams();
  const [key, setKey] = useState(0); // For forcing re-render
  const [copied, setCopied] = useState(false);

  // Memoize item lookup to prevent unnecessary re-calculations
  const item = useMemo(() => {
    if (type === "animations") {
      // Direct lookup for animations which have explicit IDs
      return flatAnimations.find((i) => i.id === id) as
        | ComponentDataItem
        | undefined;
    } else if (type === "native") {
      // Lookup for native items using generated IDs
      return flatNative.find((i) => i.id === id) as
        | ComponentDataItem
        | undefined;
    }
    return null;
  }, [type, id]);

  // Initialize props with defaults defined in metadata
  const defaultProps = useMemo(() => {
    if (!item) return {};
    const defaults = { ...item.props };
    if (item.controls) {
      // Apply default values from controls if specified
      item.controls.forEach((c: PropControl) => {
        if (c.defaultValue !== undefined) {
          defaults[c.name] = c.defaultValue;
        }
      });
    }
    return defaults;
  }, [item]);

  // Local state for props to allow real-time updates from controls
  const [props, setProps] = useState(defaultProps);

  const handlePropChange = (name: string, value: any) => {
    setProps((prev) => ({ ...prev, [name]: value }));
  };

  // Generate JSX string for the current state and copy to clipboard
  const handleCopy = () => {
    const propString = Object.entries(props)
      .filter(([k]) => k !== "children" && k !== "innerClassName") // Filter out large/static props if needed
      .map(([k, v]) => {
        if (typeof v === "string") return `${k}="${v}"`;
        if (typeof v === "boolean") return v ? `${k}` : `${k}={false}`;
        return `${k}={${v}}`;
      })
      .join(" ");

    const componentName =
      item?.component?.name || item?.preview?.name || "Component";
    navigator.clipboard.writeText(`<${componentName} ${propString} />`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!item) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Component Not Found</h2>
        <Link to="/" className="btn btn-primary mt-4">
          Go Home
        </Link>
      </div>
    );
  }

  const Component = item.component || item.preview;

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-base-100 max-w-10/12 mx-auto">
      {/* Header */}
      <header className="h-16 border-b border-white/5 flex items-center px-6 justify-between bg-base-100/50 backdrop-blur-md z-20">
        <div className="flex items-center gap-4">
          <Link
            to={type === "animations" ? "/animate" : "/native"}
            className="btn btn-ghost btn-circle btn-sm"
          >
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="font-bold text-lg leading-tight">{item.title}</h1>
            <p className="text-xs text-base-content/50 uppercase tracking-wider">
              {type} / {iconName(item)}
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setKey((k) => k + 1)}
            className="btn btn-ghost btn-circle btn-sm"
            title="Reload Component"
          >
            <RefreshCw size={18} />
          </button>
          <button
            onClick={handleCopy}
            className={`btn btn-sm gap-2 ${
              copied ? "btn-success" : "btn-outline"
            }`}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? "Copied!" : "Copy JSX"}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Preview Area */}
        <div className="flex-1 relative flex items-center justify-center p-8 overflow-hidden">
          <Background className="z-0" size={30} dotSize={1} />

          <div className="relative z-10 w-full max-w-4xl max-h-full flex items-center justify-center">
            <Suspense fallback={<Loading />}>
              {/* Key forces re-mount for animation replay */}
              <div key={key} className="p-10">
                {Component ? (
                  <Component {...props} />
                ) : (
                  <div className="text-error">Компонент не найден</div>
                )}
              </div>
            </Suspense>
          </div>
        </div>

        {/* Controls Sidebar */}
        <div className="w-80 shrink-0 h-full border-l border-white/5 bg-base-100 relative z-10 shadow-xl">
          {item.controls ? (
            <PropControls
              controls={item.controls}
              values={props}
              onChange={handlePropChange}
            />
          ) : (
            <div className="p-8 text-center text-base-content/40">
              <p>Нету контролера для компонента.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function iconName(item: any) {
  if (item.id) return item.id;
  return "Component";
}
