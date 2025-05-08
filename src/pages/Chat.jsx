
import { useState } from "react";
import Layout from "../components/Layout";

function Chat() {
  const [messages, setMessages] = useState([
    { type: "bot", text: "Bonjour ! Comment puis-je vous aider ?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { type: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    // Simuler une réponse automatique
    setTimeout(() => {
      const botResponse = {
        type: "bot",
        text:
          input.toLowerCase().includes("produit")
            ? "Pour voir nos produits, allez dans l'onglet Boutique > Produits."
            : input.toLowerCase().includes("commander")
            ? "Vous pouvez commander un produit depuis la page Produits."
            : input.toLowerCase().includes("crypto")
            ? "Pour payer en crypto, utilisez la section 'Payer par crypto'."
            : "Je suis désolé, je n'ai pas compris votre demande.",
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 800);

    setInput("");
  };

  return (
    <Layout>
        <div className="container mt-5">
      <h4 className="mb-3">Assistant Virtuel</h4>
      <div
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
