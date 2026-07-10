import { useState } from 'react'

export default function App() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  function sendMessage() {
    if(input.trim() === '') return
    setMessages([...messages, input])
    setInput('')
  }

  return (
    <div style={{padding: '20px', background: '#0f172a', color: 'white', minHeight: '100vh'}}>
      <h1>💬 Tawasal</h1>
      <div>
        {messages.map((msg, i) => <p key={i} style={{background:'#334155', padding:'10px', borderRadius:'10px'}}>{msg}</p>)}
      </div>
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        style={{padding: '10px', width: '70%', borderRadius: '10px', border: 'none'}}
      />
      <button onClick={sendMessage} style={{padding: '10px', marginLeft: '5px', borderRadius: '10px'}}>Send</button>
    </div>
  )
       }
