 const mensajes = [
        { id: 1, text: "Hola, ¿cómo estás?" },
        { id: 2, text: "Estoy bien, gracias. ¿Y tú?" },
        { id: 1, text: "Muy bien, gracias por preguntar." },
        { id: 2, text: "¿Qué has estado haciendo últimamente?" },
        { id: 1, text: "He estado trabajando en un proyecto nuevo." },
        { id: 2, text: "Eso suena interesante. ¿De qué se trata?" },
        { id: 1, text: "Es un proyecto de desarrollo web." },
        { id: 2, text: "Genial, ¿necesitas ayuda con algo?" },
        { id: 1, text: "Por ahora estoy bien, pero gracias por ofrecerte." },
        { id: 2, text: "De nada, siempre estoy aquí para ayudar." },
        { id: 1, text: "Aprecio mucho tu apoyo." },
        { id: 2, text: "¡Claro! Siempre es un placer ayudarte." },
        { id: 1, text: "Bueno, tengo que irme ahora. Hablamos luego." },
        { id: 2, text: "Está bien, cuídate. ¡Hablamos pronto!" },
        { id: 1, text: "¡Hasta luego!" },
        { id: 2, text: "¡Adiós!" }
        
    ];

function ChatMessages() {
    return (
        <div>
            {mensajes.map((mensaje) => (
                <div key={mensaje.id} className="border-b border-gray-300 p-2">
                    {mensaje.text}
                </div>
            ))}
        </div>
    );
}

export default ChatMessages;