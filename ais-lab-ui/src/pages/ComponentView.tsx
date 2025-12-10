import { useState, Suspense, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, RefreshCw, Copy, Check, Settings } from "lucide-react";
import PropControls from "@/components/PropControls";
import { Background, Loading } from "@ui/index";

import { naitvePreviewData } from "@/data/preview/nativeUiControllers";
import { motionPreviewData } from "@/data/preview/motionUiControllers";
import useTitle from "@/utils/hooks/useTitle";
import generateJSX from "@/utils/generateJSX";

export default function ComponentView() {
  const { type, id } = useParams();
  const [key, setKey] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  const item = useMemo(() => {
    if (type === "native") {
      return naitvePreviewData.find((c) => c.id === Number(id));
    }
    if (type === "animations") {
      return motionPreviewData.find((c) => c.id === Number(id));
    }
  }, [type, id]);

  useTitle(item?.title || "Component View");
  const [props, setProps] = useState<Record<string, any>>(
    item?.defaultProps || {}
  );

  const propsComponent = props;

  const handlePropChange = (name: string, value: any) => {
    setProps((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopy = () => {
    const jsx = generateJSX(item, propsComponent);
    navigator.clipboard.writeText(jsx);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  if (!item) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Компонент не найден</h2>
        <Link to="/" className="btn btn-primary mt-4">
          Go Home
        </Link>
      </div>
    );
  }

  const Component = item.component;

  return (
    <div className="flex flex-col h-screen overflow-clip bg-black text-base-content font-sans selection:bg-blue-500/30">
      {/* Header */}
      <header className="h-16 border-b border-white/5 flex items-center px-6 justify-between bg-base-100/80 backdrop-blur-xl  relative">
        <div className="flex items-center gap-4">
          <Link
            to={type === "animations" ? "/animate" : "/native"}
            className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/5 text-base-content/60 hover:text-white transition-all border border-transparent hover:border-white/5"
          >
            <ArrowLeft size={20} />
          </Link>
          <div className="flex flex-col">
            <h1 className="font-bold text-lg leading-tight tracking-tight text-white flex items-center gap-2">
              {item.title}
              <span className="text-xs font-normal px-2 py-0.5 rounded-full bg-white/5 text-base-content/40 border border-white/5">
                v1.0
              </span>
            </h1>
            <p className="text-xs text-base-content/40 uppercase tracking-widest font-medium mt-0.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              {type} / {iconName(item)}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="h-8 w-px bg-white/5 mx-2"></div>
          <button
            onClick={() => setKey((k) => k + 1)}
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white/5 text-base-content/60 hover:text-white transition-all"
            title="Reload Component"
          >
            <RefreshCw size={18} />
          </button>
          <button
            onClick={handleCopy}
            className={`h-9 px-4 rounded-lg flex items-center gap-2 text-sm font-medium transition-all ${
              copied
                ? "bg-green-500/10 text-green-400 border border-green-500/20"
                : "bg-white/5 hover:bg-white/10 text-base-content/80 border border-white/5 hover:border-white/10"
            }`}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? "Copied!" : "Copy JSX"}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-clip relative">
        <Background
          className="absolute inset-0 z-0 opacity-30 pointer-events-none"
          size={40}
          dotSize={1.5}
        />
        <Background.Parallax />

        {/* Preview Area */}
        <div className="flex-1 relative flex items-center justify-center p-8 overflow-clip z-10">
          <div className="relative w-full max-w-5xl h-full max-h-[90%] flex items-center justify-center">
            <div className="absolute inset-0 bg-base-100/30 backdrop-blur-3xl rounded-3xl border border-white/5 shadow-2xl"></div>

            <div className="relative z-10 w-full h-full flex items-center justify-center overflow-clip p-12 custom-scrollbar">
              <Suspense fallback={<Loading />}>
                <div key={key} className="w-full flex justify-center ">
                  {Component ? (
                    <Component {...propsComponent}>
                      {item.previewText && item.previewText}
                    </Component>
                  ) : (
                    <div className="text-error bg-error/10 px-4 py-2 rounded-lg border border-error/20">
                      Компонент не найден
                    </div>
                  )}
                </div>
              </Suspense>
            </div>
          </div>
        </div>

        {/* Controls Sidebar */}
        <div className="w-96 shrink-0 h-full border-l border-white/5 bg-base-100/80 backdrop-blur-xl relative z-20 shadow-[-10px_0_30px_rgba(0,0,0,0.5)]">
          {item.controllers ? (
            <PropControls
              controls={item.controllers}
              values={props}
              onChange={handlePropChange}
            />
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-base-content/30 p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center">
                <Settings size={32} className="opacity-20" />
              </div>
              <div>
                <p className="font-medium mb-1">Нет настроек</p>
                <p className="text-sm opacity-50">
                  Для этого компонента нет доступных параметров
                </p>
              </div>
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
