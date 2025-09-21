"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link href="/" className="logo">
          INTERGAS
        </Link>
        <nav className="nav">
          <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link href="/commodities" className={`nav-link ${pathname === '/commodities' ? 'active' : ''}`}>Commodities</Link>
          <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>About</Link>
          <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
        </nav>
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
        </button>
      </div>
      <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
        <Link href="/" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Home</Link>
        <Link href="/commodities" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Commodities</Link>
        <Link href="/about" className="mobile-nav-link" onClick={() => setIsOpen(false)}>About</Link>
        <Link href="/contact" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>
    </header>
  );
}