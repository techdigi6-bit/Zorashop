import { Link } from 'react-router-dom';
import { Bell, HelpCircle, Globe, Search, ShoppingCart, Facebook, Instagram } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-[#ee4d2d] text-white sticky top-0 z-50">
      {/* Top Bar */}
      <div className="max-w-6xl mx-auto px-4 hidden md:flex justify-between items-center py-1 text-[13px]">
        <div className="flex items-center gap-2">
          <Link to="#" className="hover:text-white/80">Seller Centre</Link>
          <span className="text-white/50">|</span>
          <Link to="#" className="hover:text-white/80">Download</Link>
          <span className="text-white/50">|</span>
          <div className="flex items-center gap-1">
            <span>Follow us on</span>
            <Link to="#" className="hover:text-white/80"><Facebook className="w-4 h-4" /></Link>
            <Link to="#" className="hover:text-white/80"><Instagram className="w-4 h-4" /></Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link to="#" className="flex items-center gap-1 hover:text-white/80">
            <Bell className="w-4 h-4" /> Notifications
          </Link>
          <Link to="#" className="flex items-center gap-1 hover:text-white/80">
            <HelpCircle className="w-4 h-4" /> Help
          </Link>
          <Link to="#" className="flex items-center gap-1 hover:text-white/80">
            <Globe className="w-4 h-4" /> English
          </Link>
          <div className="flex items-center gap-2 font-medium">
            <Link to="#" className="hover:text-white/80">Sign Up</Link>
            <span className="text-white/50">|</span>
            <Link to="#" className="hover:text-white/80">Login</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-6xl mx-auto px-4 py-3 md:py-4 flex flex-col md:flex-row items-center gap-3 md:gap-8">
        {/* Logo & Cart for Mobile */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-white rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6 text-white">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </div>
            <span className="text-2xl md:text-3xl font-bold tracking-wide">Zora</span>
          </Link>
          
          {/* Cart (Mobile only) */}
          <div className="relative px-2 md:hidden">
            <Link to="/checkout">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-1 bg-white text-[#ee4d2d] text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-[#ee4d2d]">
                3
              </span>
            </Link>
          </div>
        </div>

        {/* Search */}
        <div className="flex-1 w-full flex flex-col gap-1">
          <div className="flex bg-white rounded-sm p-1">
            <input 
              type="text" 
              placeholder="Search for products, brands and shops" 
              className="flex-1 px-3 text-gray-800 text-sm focus:outline-none w-full"
            />
            <button className="bg-[#ee4d2d] px-4 md:px-6 py-2 rounded-sm hover:bg-[#d73d22] transition-colors">
              <Search className="w-4 h-4 text-white" />
            </button>
          </div>
          <div className="hidden md:flex gap-3 text-[11px] text-white/90 mt-1">
            <Link to="#">iPhone 15</Link>
            <Link to="#">Laptop Gaming</Link>
            <Link to="#">Skincare</Link>
            <Link to="#">Sepatu Pria</Link>
            <Link to="#">Kipas Angin</Link>
            <Link to="#">Tas Wanita</Link>
          </div>
        </div>

        {/* Cart (Desktop only) */}
        <div className="hidden md:block mt-2 relative px-4">
          <Link to="/checkout">
            <ShoppingCart className="w-8 h-8" />
            <span className="absolute -top-2 right-1 bg-white text-[#ee4d2d] text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-[#ee4d2d]">
              3
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
