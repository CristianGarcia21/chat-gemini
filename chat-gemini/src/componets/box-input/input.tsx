
import { useState } from "react";



function InputChat () {

    // Estado que viene siendo el equivalente a NgModel en Angular
    const [input, setInput] = useState("");

    

    return (  
        <div className="w-full ">
            
            <div className="flex items-center gap-2">
                <input 
                type="text" 
                value={input}  // Asigno el valor del input al estado
                onChange={(e) => setInput(e.target.value)}  // Actualizo el estado con el valor del input
                placeholder='Escribe tu inquietud aqui...' 
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"
                />      
                {input.trim() !== "" && (
                <button 
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                onClick={() => {
                    console.log("Enviando mensaje:", input);
                    setInput("");  // Este deja el input campo vacio
                }}
                >
                    Enviar
                </button>
                )}
            </div>
        </div>
            
    );
}

export default InputChat;