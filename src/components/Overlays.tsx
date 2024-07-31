import { createPortal } from "react-dom";
import { useAtomValue } from "jotai";
import Modal from "./Modal";
import { uiAtom } from "../state";

const mountElement = document.getElementById("overlays");

const Overlays = () => {
  const ui = useAtomValue(uiAtom);
  if (!mountElement) return <div>Erro</div>;
  return createPortal(<>{ui.modal && <Modal />}</>, mountElement);
};
export default Overlays;
