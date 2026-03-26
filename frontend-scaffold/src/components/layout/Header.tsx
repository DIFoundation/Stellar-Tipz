import React, { useState } from 'react';
import { Github, Menu, X } from 'lucide-react';
import WalletConnect from '../shared/WalletConnect';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-b-3 border-black bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tight">TIPZ</span>
          <span className="text-xl">💫</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="/leaderboard" className="font-bold uppercase text-sm tracking-wide hover:underline">
            Leaderboard
          </a>
          <a href="/dashboard" className="font-bold uppercase text-sm tracking-wide hover:underline">
            Dashboard
          </a>
        </nav>

        {/* Desktop right actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/Akanimoh12/stellar-tipz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:opacity-60 transition-opacity"
          >
            <Github size={20} />
          </a>
          <WalletConnect />
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-1"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t-2 border-black px-4 py-4 flex flex-col gap-4">
          <a href="/leaderboard" className="font-bold uppercase text-sm tracking-wide hover:underline">
            Leaderboard
          </a>
          <a href="/dashboard" className="font-bold uppercase text-sm tracking-wide hover:underline">
            Dashboard
          </a>
          <a
            href="https://github.com/Akanimoh12/stellar-tipz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-bold hover:opacity-60 transition-opacity"
          >
            <Github size={16} /> GitHub
          </a>
          <WalletConnect className="w-full" />
        </div>
      )}
    </header>
  );
};

export default Header;
