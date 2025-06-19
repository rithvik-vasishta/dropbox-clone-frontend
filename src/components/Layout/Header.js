import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    const [menuOpen, setMenuOpen]     = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const profileRef = useRef(null);
    useEffect(() => {
      const handleClickOutside = e => {
            if (profileRef.current && !profileRef.current.contains(e.target)) {
                  setProfileOpen(false);
                }
          };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Left: logo + menu toggle */}
                <div className="flex items-center">
                    {/* Mobile menu button */}
                    <button
                        className="md:hidden focus:outline-none mr-2"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? (
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>

                    {}
                    <nav
                        className={`${
                            menuOpen ? 'block' : 'hidden'
                        } md:flex space-y-2 md:space-y-0 md:space-x-4`}
                    >
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? 'block font-semibold text-blue-600'
                                    : 'block text-gray-600 hover:text-blue-500'
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/upload"
                            className={({ isActive }) =>
                                isActive
                                    ? 'block font-semibold text-blue-600'
                                    : 'block text-gray-600 hover:text-blue-500'
                            }
                        >
                            Upload
                        </NavLink>
                        <NavLink
                            to="/search"
                            className={({ isActive }) =>
                                isActive
                                    ? 'block font-semibold text-blue-600'
                                    : 'block text-gray-600 hover:text-blue-500'
                            }
                        >
                            Search
                        </NavLink>
                    </nav>
                </div>

                {/* Right: Profile icon */}
                      <div className="relative" ref={profileRef}>
                        <img
                          src="/profile-icon.svg"
                          alt="Profile"
                          className="h-8 w-8 rounded-full cursor-pointer"
                          onClick={() => setProfileOpen(open => !open)}
                        />
                +
                        {profileOpen && (
                          <div className="origin-top-right absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-50">
                                <NavLink
                                  to="/login"
                                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                  onClick={() => setProfileOpen(false)}
                                >
                                  Log In
                                </NavLink>
                            <NavLink
                              to="/register"
                              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                              onClick={() => setProfileOpen(false)}
                            >
                              Register
                            </NavLink>
                          </div>
                        )}
                      </div>
            </div>
        </header>
    );
}
