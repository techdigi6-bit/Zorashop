import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Star, Minus, Plus } from 'lucide-react';
import { products } from '../data/products';

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f5f5]">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Produk tidak ditemukan</h1>
        <button onClick={() => navigate('/')} className="bg-[#ee4d2d] text-white px-6 py-2 rounded-sm">
          Kembali ke Beranda
        </button>
      </div>
    );
  }

  const handleOrder = () => {
    navigate('/checkout', {
      state: {
        product,
        qty
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] pb-20">
      <main className="max-w-6xl mx-auto mt-4 px-4">
        <div className="bg-white rounded-sm shadow-sm flex flex-col md:flex-row p-4 md:p-6 gap-6 md:gap-10">
          {/* Product Image */}
          <div className="w-full md:w-2/5">
            <div className="aspect-square rounded-sm overflow-hidden border border-gray-100">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full md:w-3/5 flex flex-col">
            <h1 className="text-xl md:text-2xl font-medium text-gray-800 mb-3">{product.name}</h1>
            
            <div className="flex items-center gap-4 text-sm mb-4">
              <div className="flex items-center text-[#ee4d2d] font-medium border-b border-[#ee4d2d] pb-0.5">
                <span className="mr-1">{product.rating}</span>
                <div className="flex text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="text-gray-600"><span className="text-gray-800 font-medium border-b border-gray-800 pb-0.5">{product.reviews}</span> Penilaian</div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="text-gray-600"><span className="text-gray-800 font-medium">{product.sold}</span> Terjual</div>
            </div>

            <div className="bg-gray-50 p-4 rounded-sm mb-6">
              <div className="text-3xl font-medium text-[#ee4d2d]">
                Rp {product.price.toLocaleString('id-ID')}
              </div>
            </div>

            <div className="flex items-center gap-6 mb-8">
              <span className="text-gray-500 w-24">Kuantitas</span>
              <div className="flex items-center border border-gray-300 rounded-sm">
                <button 
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 border-r border-gray-300"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <input 
                  type="text" 
                  value={qty} 
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    if (!isNaN(val) && val > 0) setQty(val);
                  }}
                  className="w-12 h-8 text-center focus:outline-none text-gray-800"
                />
                <button 
                  onClick={() => setQty(qty + 1)}
                  className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 border-l border-gray-300"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <span className="text-sm text-gray-500">Tersedia 999+ buah</span>
            </div>

            <div className="flex gap-4 mt-auto">
              <button className="flex-1 md:flex-none md:w-48 py-3 border border-[#ee4d2d] text-[#ee4d2d] bg-orange-50 rounded-sm font-medium hover:bg-orange-100 transition-colors flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Masukkan Keranjang
              </button>
              <button 
                onClick={handleOrder}
                className="flex-1 md:flex-none md:w-48 py-3 bg-[#ee4d2d] text-white rounded-sm font-medium hover:bg-[#d73d22] transition-colors"
              >
                Beli Sekarang
              </button>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-sm shadow-sm mt-4">
          <div className="bg-gray-50 p-4">
            <h2 className="text-lg font-medium text-gray-800">Spesifikasi Produk</h2>
          </div>
          <div className="p-4 md:p-6 text-sm text-gray-700">
            <div className="flex mb-4">
              <span className="w-40 text-gray-400">Kategori</span>
              <span className="text-blue-600">Zora &gt; {product.category}</span>
            </div>
            <div className="flex mb-4">
              <span className="w-40 text-gray-400">Stok</span>
              <span>145</span>
            </div>
            <div className="flex mb-4">
              <span className="w-40 text-gray-400">Dikirim Dari</span>
              <span>Jakarta Selatan</span>
            </div>
          </div>

          <div className="bg-gray-50 p-4">
            <h2 className="text-lg font-medium text-gray-800">Deskripsi Produk</h2>
          </div>
          <div className="p-4 md:p-6 text-sm text-gray-700 whitespace-pre-line leading-relaxed">
            {product.desc}
            <br /><br />
            Fitur Utama:<br />
            - Material premium yang tahan lama<br />
            - Desain ergonomis dan nyaman digunakan<br />
            - Cocok untuk penggunaan sehari-hari<br />
            <br />
            Catatan:<br />
            Harap membaca deskripsi dengan teliti sebelum membeli. Barang yang sudah dibeli tidak dapat ditukar atau dikembalikan kecuali ada cacat pabrik.
          </div>
        </div>
      </main>
    </div>
  );
}
