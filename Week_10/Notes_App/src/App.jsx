import React, { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState('');
  const [selectedColor, setSelectedColor] = useState('red');
  const [filter, setFilter] = useState('');

  const addNote = () => {
    if (!text.trim()) return;

    const newNote = {
      id: Date.now(),
      text,
      color: selectedColor,
    };
    setNotes([newNote, ...notes]);
    setText('');
  };

  const filteredNotes = notes.filter(note =>
    note.text.toLowerCase().includes(filter.toLowerCase())
  );

  const colors = ['red', 'orange', 'yellow', 'green', 'blue'];

  return (
    <div className='notes-App'>
      <h2>Notes App</h2>

      {/* Arama */}
      <div className='Search'>
        <input
          type="text"
          placeholder="Search"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      {/* Not Giriş Alanı */}
      <div className='textArea-Bar'>
        <textarea
          id='textArea'
          placeholder='Enter your note here...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      {/* Renk Seçimi ve Ekleme Butonu */}
      <div className='circle-container'>
        <div className='circle-group'>
          {colors.map((color) => (
            <span
              key={color}
              className={`circle ${selectedColor === color ? 'selected' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
        <button id='button' onClick={addNote}>Add</button>
      </div>

      {/* Notlar Listesi */}
      <div className='notes-list'>
        {filteredNotes.map(note => (
          <div
            key={note.id}
            className='note'
            style={{ backgroundColor: note.color }}
          >
            {note.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
