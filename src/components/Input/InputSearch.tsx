import { useDebounce } from "@uidotdev/usehooks";
import { FC, useEffect, useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

interface App {
  name: string;
  appId: string;
  version: string;
}

interface SearchInputProps {
  onSearch: (term: string) => void;
  isLoading: boolean;
  searchResults: App[];
}

const SearchInputCommand: FC<SearchInputProps> = ({
  onSearch,
  isLoading,
  searchResults,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      onSearch(debouncedSearchTerm);
    }
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      onSearch(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm, onSearch]);

  return (
    <Command className="mb-4">
      <CommandInput
        placeholder="Procure por algum app..."
        value={searchTerm}
        onValueChange={setSearchTerm}
        onKeyDown={handleKeyDown} // Handle Enter key press
      />
      <CommandList>
        <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
        {isLoading ? (
          <CommandItem>Carregando...</CommandItem>
        ) : (
          searchResults.map((app) => (
            <CommandItem className="cursor-pointer" key={app.appId}>
              {app.name}
            </CommandItem>
          ))
        )}
      </CommandList>
    </Command>
  );
};

export default SearchInputCommand;
