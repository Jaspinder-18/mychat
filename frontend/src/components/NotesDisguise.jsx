import React, { useState } from 'react';

const NotesDisguise = ({ onUnlock }) => {
    const [note, setNote] = useState('');

    const handleSave = () => {
        // Remove all whitespace/newlines to handle mobile auto-correct issues (e.g. "# mychat = 1809")
        // and ensure strict matching for the secret code.
        const cleanNote = note.replace(/\s/g, '');

        if (cleanNote === '#mychat=1809') {
            onUnlock();
        } else {
            // Save as txt file logic
            // In a mobile environment (APK), this might need specific handling, 
            // but for web/hybrid, a download link works or we can just simulate it.
            // For a stealth app, downloading a file is a good cover.
            const blob = new Blob([note], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `note_${new Date().toISOString().slice(0, 10)}.txt`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            // Optional: Show a toast/alert acting like it saved
            alert('Note saved successfully!');
            setNote('');
        }
    };

    const handleCancel = () => {
        setNote('');
    };

    return (
        <div className="flex flex-col h-screen bg-[#fdf6e3] text-[#657b83] font-sans">
            {/* Header */}
            <header className="p-4 bg-[#eee8d5] border-b border-[#d3cbb8] flex items-center justify-between shadow-sm">
                <h1 className="text-xl font-bold tracking-tight">Quick Notes</h1>
                <div className="text-sm text-gray-500">{new Date().toLocaleDateString()}</div>
            </header>

            {/* Note Area */}
            <main className="flex-1 p-4">
                <textarea
                    className="w-full h-full bg-transparent border-none resize-none focus:outline-none text-lg leading-relaxed placeholder-[#93a1a1]"
                    placeholder="Type your note here..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    spellCheck="false"
                />
            </main>

            {/* Footer / Controls */}
            <footer className="p-4 bg-[#eee8d5] border-t border-[#d3cbb8] flex justify-between items-center">
                <button
                    onClick={handleCancel}
                    className="px-6 py-2 rounded-full text-[#657b83] hover:bg-[#d3cbb8] transition-colors font-medium active:scale-95 transform duration-150"
                >
                    Cancel
                </button>
                <div className="flex-1"></div>
                <button
                    onClick={handleSave}
                    className="px-8 py-2 rounded-full bg-[#cb4b16] text-white shadow-md hover:bg-[#bd380f] transition-colors font-bold active:scale-95 transform duration-150"
                >
                    Save
                </button>
            </footer>
        </div>
    );
};

export default NotesDisguise;
