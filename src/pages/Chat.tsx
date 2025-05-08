import { useState, useRef, useEffect } from "react";
import Layout from "../components/Layout";

function Chat() {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Bonjour ! Comment puis-je vous aider ?" },
  ]);
  const [input, setInput] = useState("");

  // Référence pour faire défiler la fenêtre de chat vers le bas
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  // Fonction pour générer une réponse du chatbot
  const generateBotResponse = (userMessage: string) => {
    if (userMessage.toLowerCase().includes("produit")) {
      return "Pour voir nos produits, allez dans l'onglet Boutique > Produits.";
    } else if (userMessage.toLowerCase().includes("commander")) {
      return "Vous pouvez commander un produit depuis la page Produits.";
    } else if (userMessage.toLowerCase().includes("crypto")) {
      return "Pour payer en crypto, utilisez la section 'Payer par crypto'.";
    } else {
      return "Je suis désolé, je n'ai pas compris votre demande.";
    }
  };

  // Fonction pour envoyer le message
  const handleSend = () => {
    if (!input.trim()) return;

    // Ajouter le message de l'utilisateur
    const userMessage = { type: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    // Simuler la réponse du bot après un délai
    setTimeout(() => {
      const botResponse = {
        type: "bot",
        text: generateBotResponse(input),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 800);

    setInput("");
  };

  // Faire défiler la fenêtre de chat vers le bas à chaque mise à jour des messages
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Layout>
      <div className="container mt-5">
        <h4 className="mb-3">Assistant Virtuel</h4>
        <div
          ref={chatContainerRef}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            height: "400px",
            overflowY: "auto",
            padding: "15px",
            backgroundColor: "#f9f9f9",
          }}
        >
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`mb-2 ${msg.type === "user" ? "text-end" : "text-start"}`}
            >
              <span
                className={`d-inline-block px-3 py-2 rounded-3 ${
                  msg.type === "user" ? "bg-primary text-white" : "bg-light text-dark"
                }`}
              >
                {msg.text}
              </span>
            </div>
          ))}
        </div>

        <div className="input-group mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Écrivez votre question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button className="btn btn-success" onClick={handleSend}>
            Envoyer
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Chat;
