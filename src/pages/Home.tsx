import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Shirt, Smartphone, Sparkles, Coffee, Gamepad2 } from 'lucide-react';
import { products } from '../data/products';

export default function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'Fashion', icon: <Shirt className="w-6 h-6 text-[#ee4d2d]" /> },
    { name: 'Elektronik', icon: <Smartphone className="w-6 h-6 text-[#ee4d2d]" /> },
    { name: 'Beauty', icon: <Sparkles className="w-6 h-6 text-[#ee4d2d]" /> },
    { name: 'Appliances', icon: <Coffee className="w-6 h-6 text-[#ee4d2d]" /> },
    { name: 'Hobby', icon: <Gamepad2 className="w-6 h-6 text-[#ee4d2d]" /> },
  ];

  return (
    <div className="min-h-screen pb-10">
      <main className="max-w-6xl mx-auto px-4 mt-6">
        {/* Hero Section */}
        <div className="flex gap-2 h-[140px] sm:h-[240px] md:h-[360px] mb-6">
          {/* Main Hero Image (Electronic) */}
          <div className="w-2/3 h-full bg-gray-200 rounded-sm overflow-hidden relative">
            <img 
              src="/hero-electronic.jpg" 
              alt="Hero Electronic" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Side Promo Images */}
          <div className="w-1/3 flex flex-col gap-2 h-full">
            <div className="h-1/2 bg-gray-200 rounded-sm overflow-hidden relative">
              <img 
                src="/hero-promo1.jpg" 
                alt="Promo 1" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-1/2 bg-gray-200 rounded-sm overflow-hidden relative">
              <img 
                src="/hero-promo2.jpg" 
                alt="Promo 2" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="bg-white rounded-sm p-4 mb-6 shadow-sm">
          <h2 className="text-gray-500 font-medium mb-4 uppercase text-sm">Kategori</h2>
          <div className="grid grid-cols-5 gap-4">
            {categories.map((cat, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-sm transition-colors">
                <div className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center bg-gray-50">
                  {cat.icon}
                </div>
                <span className="text-xs text-gray-700">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="mb-4">
          <div className="bg-white p-4 border-b border-[#ee4d2d] mb-4 z-40">
            <h2 className="text-[#ee4d2d] font-medium uppercase">Rekomendasi</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4">
            {products.map((product) => (
              <div 
                key={product.id} 
                onClick={() => navigate(`/product/${product.id}`)}
                className="bg-white rounded-sm shadow-sm hover:shadow-md hover:-translate-y-[1px] transition-all cursor-pointer flex flex-col"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-2 md:p-3 flex flex-col flex-1">
                  <h3 className="text-xs md:text-sm text-gray-800 line-clamp-2 mb-2 min-h-[2.5rem]">{product.name}</h3>
                  <div className="mt-auto">
                    <div className="text-[#ee4d2d] font-medium text-sm md:text-base mb-2">
                      Rp {product.price.toLocaleString('id-ID')}
                    </div>
                    <div className="flex items-center justify-between text-[10px] md:text-xs text-gray-500">
                      <div className="flex items-center text-yellow-400">
                        ★ <span className="text-gray-500 ml-1">{product.rating}</span>
                      </div>
                      <div>{product.sold} Terjual</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
