import { useEffect, useState } from "react";

export default function useTitle(title: string) {
  const [_title, setTitle] = useState(title);
  useEffect(() => {
    document.title = _title;
  }, [title, _title]);
  return { setTitle };
}
