import Head from "next/head";
import { ToastContainer } from "react-toastify";
import Modal from "react-modal";
import Sidebar from "../components/Sidebar";
import Pasos from "../components/Pasos";
import ModalProducto from "../components/ModalProducto";
import useDespensa from "../hooks/useDespensa";
import "react-toastify/dist/ReactToastify.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#__next");

export default function Layout({ children, pagina }) {
  const { modal } = useDespensa();

  return (
    <>
      <Head>
        <title>{`Despensa - ${pagina}`}</title>
        <meta name="description" content="despensa" />
      </Head>
      <div className="md:flex ">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
          <Sidebar />
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="pt-10 px-5">
            <Pasos />
            {children}
          </div>
        </main>
      </div>
      {
        <Modal isOpen={modal} style={customStyles}>
          <ModalProducto />
        </Modal>
      }
      <ToastContainer />
    </>
  );
}
