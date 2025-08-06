
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu, Search } from 'lucide-react';


type NavProps = {
    onSearch: (term: string) => void
}
const navVariants = {
    hidden: { scale: 0 },
    visible: {
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 1, 0.5, 1] as [number, number, number, number],
        },
    },
    exit: {
        scale: 0,
        transition: {
            duration: 0.4,
            ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
        },
    },
};
const Navbar = ({ onSearch }: NavProps) => {


    const [isOpen, setIsOpen] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [isSearch, setisSearch] = useState(false);
    const searchInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isSearch) {
            searchInputRef.current?.focus();
        }
    }, [isSearch]);

    const handelInputchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value)
        onSearch(e.target.value)
    }
    return (
        <header className="w-full text-white py-2">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between relative">

                {
                    isSearch ?
                        <div className="flex items-center gap-3">
                            <input
                                type="text"
                                onChange={handelInputchange}
                                value={searchInput}
                                ref={searchInputRef}
                                placeholder="Search Anime"
                                className="flex w-full px-4 py-2 bg-zinc-800 rounded-md outline-none text-white font-text"
                            />

                        </div>

                        :
                        <div className="flex w-full justify-between items-center">
                            <h1 className="tracking-wide font-heading text-primary text-3xl lg:text-4xl">Anihub</h1>

                            {/* Desktop Nav */}
                            <nav className="hidden md:flex gap-6 font-medium text-lg capitalize items-center">
                                <div className="relative">
                                    <input
                                        type="text"
                                        onChange={handelInputchange}
                                        value={searchInput}
                                        ref={searchInputRef}
                                        placeholder="Search Anime"
                                        className="flex w-full px-4 py-2 bg-zinc-800 rounded-md outline-none text-white font-text"
                                    />
                                    {
                                        searchInput.length > 0 ?
                                            <X
                                                className="w-6 h-6 text-white cursor-pointer absolute right-3 top-1/4 z-30"
                                                onClick={() => {
                                                   
                                                    setSearchInput("")
                                                     onSearch("")
                                                    console.log("hello");
                                                    
                                                }}

                                            /> : null
                                    }

                                </div>

                                <a href="#">home</a>
                                <a href="#">anime</a>
                                <a href="#">trending</a>
                            </nav>



                            {/* Mobile Menu Icon */}
                            <div className="md:hidden flex gap-5 items-center">
                                <button className="" onClick={() => {
                                    setisSearch(!isSearch)

                                }}>
                                    <Search />
                                </button>
                                <Menu
                                    className="w-7 h-7 text-white cursor-pointer"
                                    onClick={() => setIsOpen(!isOpen)}
                                />
                            </div>
                        </div>
                }
                {/* Logo */}

            </div>

            {/* Fullscreen Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={navVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"

                        className="fixed inset-0 z-50 bg-[#0c0c0c] flex flex-col items-center justify-center gap-8 text-xl font-medium capitalize md:hidden">
                        <div className="absolute right-8 top-8"> <X className="w-8 h-8 text-primary" onClick={() => setIsOpen(false)} /></div>

                        <a href="#" onClick={() => setIsOpen(false)}>home</a>
                        <a href="#" onClick={() => setIsOpen(false)}>anime</a>
                        <a href="#" onClick={() => setIsOpen(false)}>trending</a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Navbar;
