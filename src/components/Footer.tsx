import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5] text-gray-600 text-xs border-t-4 border-[#ee4d2d] pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
          {/* CUSTOMER SERVICE */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-gray-800 mb-2">CUSTOMER SERVICE</h3>
            <Link to="#" className="hover:text-[#ee4d2d]">Help Centre</Link>
            <Link to="#" className="hover:text-[#ee4d2d]">Zora Blog</Link>
            <Link to="#" className="hover:text-[#ee4d2d]">Zora Guarantee</Link>
            <Link to="#" className="hover:text-[#ee4d2d]">Payment Methods</Link>
            <Link to="#" className="hover:text-[#ee4d2d]">ShopeePay</Link>
            <Link to="#" className="hover:text-[#ee4d2d]">Track Order</Link>
            <Link to="#" className="hover:text-[#ee4d2d]">Free Shipping</Link>
            <Link to="#" className="hover:text-[#ee4d2d]">Return & Refund</Link>
            <Link to="#" className="hover:text-[#ee4d2d]">Contact Us</Link>
          </div>

          {/* ABOUT ZORA */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-gray-800 mb-2">ABOUT ZORA</h3>
            <Link to="#" className="hover:text-[#ee4d2d]">About Us</Link>
            <Link to="#" className="hover:text-[#ee4d2d]">Zora Careers</Link>
            <Link to="#" className="hover:text-[#ee4d2d]">Zora Policies</Link>
            <Link to="#" className="hover:text-[#ee4d2d]">Privacy Policy</Link>
            <Link to="#" className="hover:text-[#ee4d2d]">Zora Mall</Link>
            <Link to="#" className="hover:text-[#ee4d2d]">Seller Centre</Link>
            <Link to="#" className="hover:text-[#ee4d2d]">Flash Deals</Link>
          </div>

          {/* PAYMENT & LOGISTICS */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-bold text-gray-800 mb-4">PAYMENT</h3>
              <div className="flex flex-wrap gap-2">
                <div className="bg-white p-2 shadow-sm rounded-sm border border-gray-200 w-14 h-8 flex items-center justify-center text-[10px] font-bold text-blue-800">VISA</div>
                <div className="bg-white p-2 shadow-sm rounded-sm border border-gray-200 w-14 h-8 flex items-center justify-center text-[8px] font-bold text-red-600">MasterCard</div>
                <div className="bg-white p-2 shadow-sm rounded-sm border border-gray-200 w-14 h-8 flex items-center justify-center text-[10px] font-bold text-blue-500">JCB</div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-4">LOGISTICS</h3>
              <div className="flex flex-wrap gap-2">
                <div className="bg-white p-2 shadow-sm rounded-sm border border-gray-200 w-14 h-8 flex items-center justify-center text-[10px] font-bold text-red-500">J&T</div>
                <div className="bg-white p-2 shadow-sm rounded-sm border border-gray-200 w-14 h-8 flex items-center justify-center text-[10px] font-bold text-blue-600">JNE</div>
                <div className="bg-white p-2 shadow-sm rounded-sm border border-gray-200 w-14 h-8 flex items-center justify-center text-[9px] font-bold text-green-600">Translink</div>
              </div>
            </div>
          </div>

          {/* FOLLOW US */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-gray-800 mb-2">FOLLOW US</h3>
            <Link to="#" className="hover:text-[#ee4d2d] flex items-center gap-2"><span className="w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center text-white text-[10px]">f</span> Facebook</Link>
            <Link to="#" className="hover:text-[#ee4d2d] flex items-center gap-2"><span className="w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center text-white text-[10px]">i</span> Instagram</Link>
            <Link to="#" className="hover:text-[#ee4d2d] flex items-center gap-2"><span className="w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center text-white text-[10px]">t</span> Twitter</Link>
            <Link to="#" className="hover:text-[#ee4d2d] flex items-center gap-2"><span className="w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center text-white text-[10px]">in</span> LinkedIn</Link>
          </div>

          {/* ZORA APP DOWNLOAD */}
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-gray-800 mb-2">ZORA APP DOWNLOAD</h3>
            <div className="flex gap-3">
              <div className="w-20 h-20 bg-gray-200 flex items-center justify-center text-gray-400 text-[10px] p-2 text-center">QR Code</div>
              <div className="flex flex-col gap-2 justify-between">
                <div className="bg-[#1a1a1a] text-white px-2 py-1 rounded-sm text-[9px] w-20 text-center">App Store</div>
                <div className="bg-[#1a1a1a] text-white px-2 py-1 rounded-sm text-[9px] w-20 text-center">Google Play</div>
                <div className="bg-[#1a1a1a] text-white px-2 py-1 rounded-sm text-[9px] w-20 text-center">AppGallery</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500">
          <div>© 2026 Zora. All Rights Reserved.</div>
          <div className="flex flex-wrap justify-center gap-2">
            <span>Country & Region:</span>
            <Link to="#" className="hover:text-[#ee4d2d]">Singapore</Link>
            <span>|</span>
            <Link to="#" className="hover:text-[#ee4d2d]">Indonesia</Link>
            <span>|</span>
            <Link to="#" className="hover:text-[#ee4d2d]">Taiwan</Link>
            <span>|</span>
            <Link to="#" className="hover:text-[#ee4d2d]">Thailand</Link>
            <span>|</span>
            <Link to="#" className="hover:text-[#ee4d2d]">Malaysia</Link>
            <span>|</span>
            <Link to="#" className="hover:text-[#ee4d2d]">Vietnam</Link>
            <span>|</span>
            <Link to="#" className="hover:text-[#ee4d2d]">Philippines</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
