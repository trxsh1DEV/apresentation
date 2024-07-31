// import { useDispatch, useSelector } from "react-redux";
// import Modal from "../../components/Modal/Modal";
// import { toggleModal } from "../../redux/modalSlice";

// export default function ModalWrapper() {
//   const dispatch = useDispatch();
//   const showModal = useSelector((state: any) => state.modal.showModal);
//   console.log("re-render");

//   const handleCreateNewClick = () => {
//     dispatch(toggleModal());
//   };

//   return (
//     <>
//       <button style={{ marginTop: "30px" }} onClick={handleCreateNewClick}>
//         Adicionar novo
//       </button>
//       {showModal && (
//         <Modal onClose={handleCreateNewClick} isOpen={showModal}>
//           <div>oi</div>
//         </Modal>
//       )}
//     </>
//   );
// }
