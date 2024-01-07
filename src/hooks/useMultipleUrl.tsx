import { useCallback, useState } from "react";

// User URL input handler using hook. Handles single/multiple query
export const useMultipleUrl = () => {
  const [multipleUrls, setMultipleUrls] = useState<string[]>([]);

  const updateUrls = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const input = e.currentTarget.value;
      if (typeof input === "string" && input !== "") {
        let urls = input.split(",");
        if (Array.isArray(urls) && urls.length > 0) {
          urls = urls.filter((url) => Boolean(url.trim()) == true);
          setMultipleUrls(Array.from(new Set(urls)));
        }
      } else {
        setMultipleUrls([]);
      }
    },
    [setMultipleUrls]
  );

  return [multipleUrls, updateUrls] as const;
};
