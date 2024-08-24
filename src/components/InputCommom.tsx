import { BASE_URL } from "@/utils/request";
import { FC, useEffect, useId, useState } from "react";

interface TypePropsSearchInput {
  type?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  id?: string;
  className?: string;
  defaultValue?: string;
}

interface ValidTypeData {
  typeData: "test" | "cpuData" | "gpuData";
  url?: never;
}

interface InvalidTypeData {
  typeData: null;
  url: string;
}

type CustomInputProps = TypePropsSearchInput &
  (ValidTypeData | InvalidTypeData);

const SearchInput: FC<CustomInputProps> = ({
  type = "text",
  placeholder,
  label = "\u00A0",
  typeData,
  url,
  id,
  defaultValue,
  className,
}) => {
  if (typeData === null && !url) {
    throw new Error("url is required when typeData is null");
  }

  const inputId = useId();
  const [data, setData] = useState<any[]>([]);
  const [results, setResults] = useState<string[]>([]);
  const [query, setQuery] = useState<string>(defaultValue || "");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (query.length < 2) return;

        if (typeData) {
          response = await fetch(`../../../${typeData}.json`);
        } else if (url) {
          const apiUrl = `${BASE_URL}/${url}${encodeURIComponent(query)}`;
          response = await fetch(apiUrl);
        }

        if (response && !response.ok) {
          throw new Error("Network response was not ok");
        }

        const fetchedData = await response?.json();
        if (Array.isArray(fetchedData)) {
          const hostnames = fetchedData.map(
            (item: { owner: string }) => item.owner
          );
          setData(hostnames);
        } else {
          console.error("Unexpected data format");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [typeData, url, query]);

  useEffect(() => {
    if (query !== "" && query.length >= 2) {
      const regexExact = new RegExp(`^${query}$`, "i");
      const regexPartial = new RegExp(`${query}`, "i");

      const exactMatch = data.find((item) => regexExact.test(item));
      const partialMatches = data.filter(
        (item) => !exactMatch && regexPartial.test(item)
      );

      setResults(exactMatch ? [exactMatch] : partialMatches);
    } else {
      setResults([]);
    }
  }, [query, data]);

  return (
    <>
      <label
        htmlFor={id || inputId}
        className="block text-2xl font-medium text-gray-700 dark:text-gray-300"
      >
        {label}
      </label>
      <input
        id={id || inputId}
        type={type}
        value={query}
        placeholder={placeholder}
        // className={`block rounded-md border-gray-300 shadow-sm focus:border-indigo-300 px-3 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${className}`}
        className="rounded-md border border-input bg-slate-0 dark:bg-slate-800 px-3 py-2 text-xl ring-offset-background placeholder:text-muted-foreground ring-2 ring-ring focus:outline-none focus:ring-4 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setQuery(event.target.value)
        }
      />
      {results.length > 0 &&
        !(results.length === 1 && results[0] === query) && (
          <ul className="absolute left-3/4 w-max border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-background shadow-lg max-h-40 overflow-y-auto z-10">
            {results.map((result, index) => (
              <li
                key={index}
                onClick={() => setQuery(result)}
                className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer border-b border-gray-200 dark:border-gray-700 last:border-b-0"
              >
                {result}
              </li>
            ))}
          </ul>
        )}
    </>
  );
};

export default SearchInput;
