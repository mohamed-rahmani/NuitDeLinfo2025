'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { cn } from '@/lib/utils';

// Configuration
const WEBHOOK_URL = 'https://n8n.azizdev.tech/webhook/chatbruti';

type Message = {
    id: string;
    text: string;
    sender: 'user' | 'bot';
};

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: 'welcome', text: "👋 Salut, je suis Nirdo ! Je suis censé être une IA responsable, mais j'ai surtout la responsabilité de ne rien comprendre. Pose-moi une question !", sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const [sessionId, setSessionId] = useState('');

    // Initialisation de la session (une seule fois)
    useEffect(() => {
        let storedId = localStorage.getItem('nirdo_session_id');
        if (!storedId) {
            storedId = Math.random().toString(36).substring(7);
            localStorage.setItem('nirdo_session_id', storedId);
        }
        setSessionId(storedId);
    }, []);

    // Scroll automatique
    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, isOpen]);

    const handleSendMessage = async () => {
        if (!inputValue.trim() || isTyping) return;

        const userMsg: Message = { id: Date.now().toString(), text: inputValue, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInputValue('');
        setIsTyping(true);

        try {
            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: userMsg.text,
                    sessionId: sessionId, // On envoie l'ID de session pour la mémoire
                    systemPrompt: "Tu es Nirdo, un chatbot 'Numérique Inclusif Responsable et Durable' (NIRD), mais tu comprends tout de travers. Tu es gentil, un peu simplet, et tu essaies d'aider mais tu réponds toujours à côté avec des conseils écolos absurdes ou des remarques sur ta consommation d'énergie. Sois drôle et attachant."
                })
            });

            if (!response.ok) throw new Error('Network response was not ok');

            const data = await response.json();
            // L'agent n8n LangChain renvoie souvent la réponse dans 'output' ou 'text'
            const botResponse = data.output || data.reply || data.text || "Je suis sans voix...";

            setMessages(prev => [...prev, { id: Date.now().toString(), text: botResponse, sender: 'bot' }]);

        } catch (error) {
            console.error('Error:', error);
            setMessages(prev => [...prev, { id: Date.now().toString(), text: "Oups ! Je suis parti faire la sieste. 😴", sender: 'bot' }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "fixed bottom-5 right-5 w-14 h-14 rounded-full bg-gradient-to-br from-[#f093fb] to-[#f5576c] text-white shadow-lg flex items-center justify-center transition-all duration-300 z-50 hover:scale-110 hover:shadow-xl",
                    isOpen ? "opacity-0 pointer-events-none scale-0" : "opacity-100 scale-100"
                )}
                aria-label="Ouvrir le chat"
            >
                <MessageCircle size={28} />
            </button>

            {/* Chat Window */}
            <div
                className={cn(
                    "fixed bottom-5 right-5 w-[calc(100vw-40px)] max-w-[400px] h-[600px] max-h-[calc(100vh-40px)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 z-50 origin-bottom-right",
                    isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-10 pointer-events-none"
                )}
            >
                {/* Header */}
                <div className="bg-gradient-to-br from-[#f093fb] to-[#f5576c] p-4 text-white text-center relative shrink-0">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 text-white/80 hover:text-white hover:scale-110 transition-all"
                    >
                        <X size={20} />
                    </button>
                    <h1 className="font-bold text-lg">🤖 Nirdo</h1>
                    <p className="text-xs opacity-90">Le bot qui fait ce qu'il peut</p>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={cn(
                                "flex gap-2 animate-in slide-in-from-bottom-2 duration-300",
                                msg.sender === 'user' ? "flex-row-reverse" : "flex-row"
                            )}
                        >
                            <div className={cn(
                                "w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm",
                                msg.sender === 'user' ? "bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white" : "bg-gradient-to-br from-[#f093fb] to-[#f5576c] text-white"
                            )}>
                                {msg.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
                            </div>
                            <div className={cn(
                                "max-w-[75%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm",
                                msg.sender === 'user'
                                    ? "bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white rounded-br-sm"
                                    : "bg-white text-gray-800 rounded-bl-sm"
                            )}>
                                {msg.text}
                            </div>
                        </div>
                    ))}

                    {isTyping && (
                        <div className="flex gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f093fb] to-[#f5576c] text-white flex items-center justify-center shrink-0">
                                <Bot size={14} />
                            </div>
                            <div className="bg-white p-3 rounded-2xl rounded-bl-sm shadow-sm flex gap-1 items-center">
                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 bg-white border-t border-gray-100 flex gap-2 shrink-0">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Écrivez votre message..."
                        className="flex-1 px-4 py-2 border-2 border-gray-100 rounded-full text-sm focus:outline-none focus:border-[#667eea] transition-colors"
                        disabled={isTyping}
                    />
                    <button
                        onClick={handleSendMessage}
                        disabled={isTyping || !inputValue.trim()}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white flex items-center justify-center shadow-md hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                        <Send size={18} />
                    </button>
                </div>
            </div>
        </>
    );
}
