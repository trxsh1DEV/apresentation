import { BASE_URL } from "@/utils/request";
import { FC, useEffect, useId, useState } from "react";

interface TypePropsSearchInput {
  type?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  label?: string;
  className?: string;
  defaultValue?: string;
}

interface ValidTypeData {
  typeData: "test" | "cpuData" | "gpuData";
  url?: string;
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
  // onChange,
  style,
  defaultValue,
  className,
}) => {
  if (typeData === null && url === undefined) {
    throw new Error("url is required when typeData is null");
  }

  const inputId = useId();

  const [data, setData] = useState<string[]>([]);
  const [results, setResults] = useState<string[]>([]);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const req = (typeData && `../../../${typeData}.json`) || url;
    fetch(`${BASE_URL}/${req}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));

    if (query) {
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
  }, [query, data, typeData]);

  // const handleResultClick = (result: string) => {
  //   onChange({ target: { value: result } } as any);
  // };

  return (
    <>
      <label htmlFor={inputId}>{label}</label>
      <input
        type={type}
        value={query || undefined}
        placeholder={placeholder}
        onChange={(event: any) => setQuery(event?.target?.value)}
        style={style}
        className={className}
        defaultValue={defaultValue}
      />
      {results.length > 0 &&
        !(results.length === 1 && results[0] === query) && (
          <ul
            style={{
              position: "absolute",
              top: "0",
              left: "75%",
              // right: 0,
              width: "max-content",
              border: "1px solid #ccc",
              borderRadius: "4px",
              backgroundColor: "#222",
              listStyle: "none",
              margin: 0,
              padding: 0,
              maxHeight: "150px",
              overflowY: "auto",
              zIndex: 3,
            }}
          >
            {results.map((result, index) => (
              <li
                key={index}
                onClick={() => setQuery(result)}
                style={{
                  padding: "8px",
                  cursor: "pointer",
                  borderBottom: "1px solid #ccc",
                }}
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
