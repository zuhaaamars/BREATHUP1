import { useState } from "react";
import "./css/chatkonsul.css";

export default function ChatKonsul() {
 const [messages, setMessages] = useState([]); // tidak ada chat awal
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim() === "") return;

    // Tambahkan pesan baru ke daftar messages
    setMessages([...messages, { text: newMessage, sender: "right" }]);
    setNewMessage(""); // Kosongkan input setelah kirim
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend(); // tekan Enter untuk kirim
  };

  return (
    <div className="chat-container">
      {/* ===== Header ===== */}
      <div className="chat-header">
        <div className="profile">
          <img src="/assets/iya.jpg" alt="Foto profil tenaga medis" />
        </div>
        <h3>Tenaga Medis</h3>
      </div>

      {/* ===== Isi Chat ===== */}
      <div className="chat-body">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>

      {/* ===== Input Chat ===== */}
      <div className="chat-input">
        <input
          type="text"
          placeholder="Ketik pesan..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleSend}>Kirim</button>
      </div>
    </div>
  );
}
