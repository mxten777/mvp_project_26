import { useState, useEffect } from "react";

export function useToast() {
  const [toast, setToast] = useState(null);
  const showToast = (msg, type = "info") => setToast({ msg, type });
  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(null), 2000);
      return () => clearTimeout(t);
    }
  }, [toast]);
  return [toast, showToast];
}
