import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens";
import ModalPostagem from "../../components/postagens/modalpostagens/ModalPostagens";


function Home(){
    return (
            <>
                <div className="bg-indigo-900 w-screen flex justify-center">
                    <div className="container grid grid-cols-2 text-white">
                        <div className='max-w-7xl flex flex-col items-center gap-4 justify-center py-4'>
                            <h2 className="text-5xl font-bold">Boas vindas!</h2>
                            <p className="text-xl">Expresse aqui seus pensamentos e opiniôes.</p>

                            <div className="flex justify-around gap-4">
                                
                            <ModalPostagem />
                            <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver postagens</button>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <img src="https://imgur.com/VpwApCU.png" 
                                alt="Imagem da Página Home" 
                                className="w-2/3"
                            />
                        </div>
                    </div>
                </div>
            <ListaPostagens />
        </>
    );
}

export default Home;

