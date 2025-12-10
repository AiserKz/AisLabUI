// Функция для преобразования React-элемента в JSX-код

function reactNodeToJSX(node: any): string {
  // null/undefined
  if (!node) return "";

  // обычный текст
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  // массив React элементов
  if (Array.isArray(node)) {
    return node.map(reactNodeToJSX).join("\n  ");
  }

  // React элемент
  if (typeof node === "object" && node.type) {
    const tag = node.type;

    const props = node.props || {};
    const { children, ...rest } = props;

    let propsStr = "";

    for (const k in rest) {
      const v = rest[k];

      if (typeof v === "string") {
        propsStr += ` ${k}="${v}"`;
      } else {
        propsStr += ` ${k}={${JSON.stringify(v)}}`;
      }
    }

    const voidTags = new Set(["img", "input", "br", "hr", "meta", "link"]);

    if (voidTags.has(tag)) return `<${tag}${propsStr} />`;

    const childStr = children ? reactNodeToJSX(children) : "";

    return `<${tag}${propsStr}>${childStr}</${tag}>`;
  }

  return "";
}

export default function generateJSX(item: any, props: Record<string, any>) {
  const componentName = item.title || "Component";

  let propsStr = "";
  for (const key in props) {
    const value = props[key];

    if (value === undefined || value === null) continue;

    if (typeof value === "boolean") {
      if (value) propsStr += ` ${key}`;
      continue;
    }

    if (typeof value === "string") {
      propsStr += ` ${key}="${value}"`;
      continue;
    }

    propsStr += ` ${key}={${JSON.stringify(value)}}`;
  }

  const children = item.previewText ? reactNodeToJSX(item.previewText) : "";

  if (children.trim().length > 0) {
    return `<${componentName}${propsStr}>\n  ${children}\n</${componentName}>`;
  }

  return `<${componentName}${propsStr} />`;
}
