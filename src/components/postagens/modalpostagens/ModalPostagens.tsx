import Popup from "reactjs-popup";
import FormPostagem from "../formpostagens/FormPostagens";
import 'reactjs-popup/dist/index.css';
import './ModalPostagens.css'

function ModalPostagem() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className='border rounded px-4 py-2 hover:bg-white hover:text-indigo-800'>
                        Nova Postagem
                    </button>
                }
                modal
            >
                <FormPostagem />
            </Popup>
        </>
    );
}

export default ModalPostagem;