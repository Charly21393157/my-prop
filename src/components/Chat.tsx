import React, { useState } from 'react';
import './Chat.css'; 

interface Message {
    text: string;
    fromUser: boolean;
}

const Chat: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [name, setName] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const handleMessage = (message: string) => {
        if (message.toLowerCase().includes('hola')) {
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: `Hola, ${message}`, fromUser: false },
                { text: 'Opciones: 1. Mostrar Menú', fromUser: false },
                { text: '2. Contactar', fromUser: false }
            ]);
            setName(true);
            setShowMenu(true);
        } else if (message.toLowerCase().includes('1')) {
            redirectToURL('https://partyx.netlify.app/servicios');
        } else if (message.toLowerCase().includes('2')) {
            redirectToURL('https://partyx.netlify.app/contacto');
        } else {
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: 'No entiendo esa opción. Por favor, intenta otra vez.', fromUser: false }
            ]);
        }
    };

    const redirectToURL = (url: string) => {
        window.open(url, '_blank');
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: 'Redirigiendo...', fromUser: false }
        ]);
    };

    return (
        <div className="chatbot-container">
            <div className="chat-container">
                <div className="chat-header">
                    <h2>Chatbot</h2>
                </div>
                <div className="chat-messages">
                    {messages.map((message, index) => (
                        <div key={index} className={`chat-message ${message.fromUser ? 'chat-message-user' : ''}`}>
                            {message.text}
                        </div>
                    ))}
                </div>
                <div className="chat-input-container">
                    <input
                        type="text"
                        className="chat-input"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                const input = e.target as HTMLInputElement;
                                handleMessage(input.value);
                                setMessages((prevMessages) => [
                                    ...prevMessages,
                                    { text: input.value, fromUser: true }
                                ]);
                                input.value = '';
                            }
                        }}
                        placeholder="Escribe un mensaje..."
                    />
                </div>
            </div>
        </div>
    );
};

export default Chat;
