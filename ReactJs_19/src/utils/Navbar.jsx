import React, { useState, useRef, useEffect } from "react";
import { FaReact } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    // Get current location to update the button text dynamically
    const location = useLocation();

    // Function to handle clicking outside the dropdown
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowDropdown(false);
        }
    };

    // Add event listener for outside click
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    // Determine the button label based on the current path
    const getButtonLabel = () => {
        switch (location.pathname) {
            case "/props":
                return "Props";
            case "/":
                return "React State";
            default:
                return "Content"; // Fallback label
        }
    };

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <Link to="/" className="text-white text-2xl flex">
                            <FaReact className="mr-2 text-4xl text-blue-400" />
                        </Link>
                        <span className="mb-2 text-2xl text-white">React 19</span>
                    </div>

                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="relative inline-block text-left">
                            <div>
                                <button
                                    type="button"
                                    onClick={toggleDropdown}
                                    className="inline-flex justify-center w-full px-2 py-2 text-sm font-medium text-white bg-gray-700 border border-transparent rounded-md shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                    id="menu-button"
                                    aria-expanded={showDropdown ? "true" : "false"}
                                    aria-haspopup="true"
                                >
                                    {getButtonLabel()} {/* Dynamic button label */}
                                    <RiArrowDropDownLine className="text-2xl" />
                                </button>
                            </div>

                            {/* Dropdown Menu */}
                            {showDropdown && (
                                <div
                                    ref={dropdownRef}
                                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="menu-button"
                                    tabIndex="-1"
                                >
                                    <div className="py-1" role="none">
                                        <Link
                                            to="/"
                                            className="block px-4 py-2 text-sm text-gray-700"
                                            role="menuitem"
                                            tabIndex="-1"
                                            onClick={() => setShowDropdown(false)}
                                        >
                                            React State
                                        </Link>
                                        <Link
                                            to="/functions"
                                            className="block px-4 py-2 text-sm text-gray-700"
                                            role="menuitem"
                                            tabIndex="-1"
                                            onClick={() => setShowDropdown(false)}
                                        >
                                            Functions
                                        </Link>
                                        <Link
                                            to="/props"
                                            className="block px-4 py-2 text-sm text-gray-700"
                                            role="menuitem"
                                            tabIndex="-1"
                                            onClick={() => setShowDropdown(false)}
                                        >
                                            Props
                                        </Link>
                                        <Link
                                            to="/wrapper"
                                            className="block px-4 py-2 text-sm text-gray-700"
                                            role="menuitem"
                                            tabIndex="-1"
                                            onClick={() => setShowDropdown(false)}
                                        >
                                            Wrapper
                                        </Link>
                                        <Link
                                            to="/controlled_comp"
                                            className="block px-4 py-2 text-sm text-gray-700"
                                            role="menuitem"
                                            tabIndex="-1"
                                            onClick={() => setShowDropdown(false)}
                                        >
                                            Controlled Component
                                        </Link>
                                        <Link
                                            to="/allkindsinput"
                                            className="block px-4 py-2 text-sm text-gray-700"
                                            role="menuitem"
                                            tabIndex="-1"
                                            onClick={() => setShowDropdown(false)}
                                        >
                                            Different Inputs
                                        </Link>
                                        <Link
                                            to="/loop_compReuse_prop"
                                            className="block px-4 py-2 text-sm text-gray-700"
                                            role="menuitem"
                                            tabIndex="-1"
                                            onClick={() => setShowDropdown(false)}
                                        >
                                            Loop CompReuse Prop
                                        </Link>
                                        <Link
                                            to="/useEffectHook"
                                            className="block px-4 py-2 text-sm text-gray-700"
                                            role="menuitem"
                                            tabIndex="-1"
                                            onClick={() => setShowDropdown(false)}
                                        >
                                            UseEffect Hook
                                        </Link>
                                        <Link
                                            to="/useref_fwdref"
                                            className="block px-4 py-2 text-sm text-gray-700"
                                            role="menuitem"
                                            tabIndex="-1"
                                            onClick={() => setShowDropdown(false)}
                                        >
                                            UseRef FwdRef Hook
                                        </Link>
                                        <Link
                                            to="/uncontrolledComp"
                                            className="block px-4 py-2 text-sm text-gray-700"
                                            role="menuitem"
                                            tabIndex="-1"
                                            onClick={() => setShowDropdown(false)}
                                        >
                                            UnControlled Component
                                        </Link>
                                        <Link
                                            to="/passingFxnInComp"
                                            className="block px-4 py-2 text-sm text-gray-700"
                                            role="menuitem"
                                            tabIndex="-1"
                                            onClick={() => setShowDropdown(false)}
                                        >
                                            Passing Fxn As Prop
                                        </Link>
                                        <Link
                                            to="/usFrmStatus"
                                            className="block px-4 py-2 text-sm text-gray-700"
                                            role="menuitem"
                                            tabIndex="-1"
                                            onClick={() => setShowDropdown(false)}
                                        >
                                            Use Form Status Use Action State
                                        </Link>
                                        <Link
                                            to="/useTransition"
                                            className="block px-4 py-2 text-sm text-gray-700"
                                            role="menuitem"
                                            tabIndex="-1"
                                            onClick={() => setShowDropdown(false)}
                                        >
                                            Use Transition Hook
                                        </Link>
                                        <Link
                                            to="/liftingstatup"
                                            className="block px-4 py-2 text-sm text-gray-700"
                                            role="menuitem"
                                            tabIndex="-1"
                                            onClick={() => setShowDropdown(false)}
                                        >
                                            Lifting state up
                                        </Link>
                                        <Link
                                            to="/useidhook"
                                            className="block px-4 py-2 text-sm text-gray-700"
                                            role="menuitem"
                                            tabIndex="-1"
                                            onClick={() => setShowDropdown(false)}
                                        >
                                            UseId Hook, React Fragment
                                        </Link>
                                        <Link
                                            to="/contextapi"
                                            className="block px-4 py-2 text-sm text-gray-700"
                                            role="menuitem"
                                            tabIndex="-1"
                                            onClick={() => setShowDropdown(false)}
                                        >
                                            Context API
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
