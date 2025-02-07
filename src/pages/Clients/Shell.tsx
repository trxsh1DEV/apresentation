import { useState, useRef, useEffect } from "react";
// import { XCircle } from "phosphor-react";
import { requestWithToken } from "../../utils/request";
import { useSetAtom } from "jotai";
import { closeModalAtom } from "../../Context/ModalContext";
import { X } from "lucide-react";

const Shell = ({
  // onClose,
  clientId
}: {
  // onClose: () => void;
  clientId: string;
}) => {
  const [output, setOutput] = useState<string[]>([]);
  const [command, setCommand] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const closeModal = useSetAtom(closeModalAtom);
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const input = document.querySelector(".input-shell") as HTMLInputElement;

  useEffect(() => {
    if (inputRef.current && !isLoading) {
      inputRef.current.focus();
    }
  }, [isLoading]);

  useEffect(() => {
    if (outputRef.current) {
      const outputHeight = outputRef.current.scrollHeight;
      outputRef.current.scrollTop = outputHeight;
      const outputEl = document.querySelector(".output")?.lastElementChild;

      if (input && outputEl) {
        input.style.top = `${outputRef.current.scrollHeight + 60}px`;
        input.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [output, input]);

  const handleCommandSubmit = async (command: string) => {
    setIsLoading(true);
    try {
      const result = await requestWithToken.post("/sockets/send-command", {
        clientId,
        command
      });
      setOutput((prevOutput) => [...prevOutput, result.data]);
    } catch (err: any) {
      setOutput((prevOutput) => [...prevOutput, err.response.data.message]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter" && !isLoading) {
      switch (e.target.value) {
        case "cls":
          setOutput([]);
          input.style.top = `0px`;
          break;
        default:
          handleCommandSubmit(command);
          break;
      }
      setCommand("");
    }
  };

  return (
    <div className="w-full h-full text-white bg-black bg-opacity-75 flex justify-center items-center z-10">
      <div className="rounded-lg border-4 p-4 relative bg-black overflow-auto w-[1000px] h-3/4 text-left">
        <button onClick={closeModal} className="absolute top-2 right-2 cursor-pointer bg-transparent">
          <X size="32" className="hover:opacity-85" />
        </button>

        <div
          style={
            {
              // display: "flex",
              // alignItems: "center",
              // width: "85%",
              // marginBottom: "10px",
              // position: "absolute",
            }
          }
          className="mt-4 input-shell flex center items-center absolute w-[95%]"
        >
          <span>$</span>
          <input
            ref={inputRef}
            type="text"
            value={command}
            onChange={(e: any) => setCommand(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
            style={
              {
                // backgroundColor: "transparent",
                // border: "none",
                // color: "white",
                // fontSize: "18px",
                // outline: "none",
                // flex: 1,
              }
            }
            className="w-full bg-transparent border-none outline-none flex-1 italic"
          />
        </div>
        <div ref={outputRef} className="output mt-8">
          {output.map((line, index) => (
            <div
              key={index}
              // style={
              //   {
              // whiteSpace: "pre-wrap",
              // fontSize: "18px",
              // margin: "15px",
              //   }
              // }
              className="whitespace-pre-wrap m-4 text-lg"
            >
              {line}
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shell;
