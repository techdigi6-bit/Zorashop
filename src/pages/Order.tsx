import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle2, Package, Truck, Home } from 'lucide-react';

export default function Order() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const state = location.state as { product: any, qty: number, total: number, delivery: string, address: string } | null;

  useEffect(() => {
    if (!state) {
      navigate('/');
    }
  }, [state, navigate]);

  if (!state) return null;

  const { product, qty, total, delivery, address } = state;
  const orderId = `ZRA-${Math.floor(Math.random() * 1000000000)}`;

  return (
    <div className="min-h-screen bg-[#f5f5f5] pb-20">
      <main className="max-w-6xl mx-auto mt-6 px-4 flex flex-col items-center">
        {/* Success Message */}
        <div className="bg-white w-full max-w-2xl rounded-sm shadow-sm p-8 flex flex-col items-center text-center border-t-[4px] border-green-500 mb-6">
          <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
          <h1 className="text-2xl font-medium text-gray-800 mb-2">Pesanan Berhasil Dibuat!</h1>
          <p className="text-gray-500 mb-6">Terima kasih telah berbelanja di Zora. Pesanan Anda sedang diproses.</p>
          
          <div className="w-full bg-gray-50 p-4 rounded-sm flex flex-col gap-2 text-sm text-left">
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-gray-500">No. Pesanan</span>
              <span className="font-medium text-gray-800">{orderId}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 py-2">
              <span className="text-gray-500">Total Pembayaran</span>
              <span className="font-medium text-[#ee4d2d]">Rp {total.toLocaleString('id-ID')}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-500">Metode Pembayaran</span>
              <span className="font-medium text-gray-800">Transfer Bank</span>
            </div>
          </div>
        </div>

        {/* Order Details */}
        <div className="bg-white w-full max-w-2xl rounded-sm shadow-sm p-6 mb-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4 flex items-center gap-2">
            <Package className="w-5 h-5 text-[#ee4d2d]" />
            Detail Produk
          </h2>
          <div className="flex gap-4 border border-gray-100 p-4 rounded-sm">
            <img src={product.image} alt={product.name} className="w-20 h-20 object-cover border border-gray-200" />
            <div className="flex flex-col flex-1">
              <span className="text-gray-800 font-medium mb-1">{product.name}</span>
              <span className="text-gray-500 text-sm mb-auto">Kategori: {product.category}</span>
              <div className="flex justify-between items-end mt-2">
                <span className="text-gray-600 text-sm">x{qty}</span>
                <span className="text-[#ee4d2d] font-medium">Rp {product.price.toLocaleString('id-ID')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Shipping Status */}
        <div className="bg-white w-full max-w-2xl rounded-sm shadow-sm p-6 mb-8">
          <h2 className="text-lg font-medium text-gray-800 mb-4 flex items-center gap-2">
            <Truck className="w-5 h-5 text-[#ee4d2d]" />
            Status Pengiriman
          </h2>
          
          <div className="relative pl-6 border-l-2 border-[#ee4d2d] ml-3 space-y-6">
            <div className="relative">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#ee4d2d] border-4 border-white"></div>
              <h3 className="font-medium text-gray-800">Pesanan Sedang Dikemas</h3>
              <p className="text-sm text-gray-500 mt-1">Penjual sedang mempersiapkan pesanan Anda.</p>
            </div>
            <div className="relative opacity-50">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-gray-300 border-4 border-white"></div>
              <h3 className="font-medium text-gray-800">Pesanan Diserahkan ke Kurir</h3>
              <p className="text-sm text-gray-500 mt-1">Menggunakan jasa pengiriman: <span className="font-medium">{delivery}</span></p>
            </div>
            <div className="relative opacity-50">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-gray-300 border-4 border-white"></div>
              <h3 className="font-medium text-gray-800">Pesanan Sedang Dikirim</h3>
              <p className="text-sm text-gray-500 mt-1">Menuju alamat: {address}</p>
            </div>
          </div>
        </div>

        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-sm font-medium hover:bg-gray-50 transition-colors"
        >
          <Home className="w-5 h-5" />
          Kembali ke Beranda
        </button>
      </main>
    </div>
  );
}
