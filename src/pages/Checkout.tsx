import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MapPin, Receipt, Truck, ArrowLeft } from 'lucide-react';

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [delivery, setDelivery] = useState('Translink');
  const [address, setAddress] = useState('Jl. Jend. Sudirman No. 1, Jakarta Pusat, DKI Jakarta, 10220');
  const [paymentMethod, setPaymentMethod] = useState('Transfer Bank');

  const state = location.state as { product: any, qty: number } | null;

  useEffect(() => {
    if (!state || !state.product) {
      navigate('/');
    }
  }, [state, navigate]);

  if (!state || !state.product) return null;

  const { product, qty } = state;
  const subtotal = product.price * qty;
  const shippingFee = delivery === 'Translink' ? 15000 : 25000;
  const total = subtotal + shippingFee;

  const handleOrder = () => {
    navigate('/order', {
      state: {
        product,
        qty,
        total,
        delivery,
        address,
        paymentMethod
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] pb-24">
      <main className="max-w-6xl mx-auto mt-4 px-4 flex flex-col gap-4">
        {/* Address Section */}
        <div className="bg-white rounded-sm shadow-sm p-6 border-t-[3px] border-t-[#ee4d2d]">
          <div className="flex items-center gap-2 text-[#ee4d2d] font-medium mb-4">
            <MapPin className="w-5 h-5" />
            <h2>Alamat Pengiriman</h2>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm md:text-base">
            <div className="font-medium text-gray-800 min-w-[150px]">
              Aria Darmawan (+62) 81234567890
            </div>
            <div className="text-gray-600 flex-1">
              <input 
                type="text" 
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border-b border-gray-300 focus:border-[#ee4d2d] focus:outline-none py-1"
                placeholder="Masukkan alamat lengkap"
              />
            </div>
            <button className="text-blue-600 font-medium uppercase text-sm hover:text-blue-700">Ubah</button>
          </div>
        </div>

        {/* Products Section */}
        <div className="bg-white rounded-sm shadow-sm p-6">
          <div className="grid grid-cols-12 gap-4 text-gray-500 text-sm mb-4">
            <div className="col-span-12 md:col-span-6">Produk Dipesan</div>
            <div className="hidden md:block col-span-2 text-center">Harga Satuan</div>
            <div className="hidden md:block col-span-2 text-center">Jumlah</div>
            <div className="hidden md:block col-span-2 text-right">Subtotal Produk</div>
          </div>
          
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-12 md:col-span-6 flex gap-4">
              <img src={product.image} alt={product.name} className="w-16 h-16 object-cover border border-gray-200" />
              <span className="text-gray-800 text-sm md:text-base">{product.name}</span>
            </div>
            <div className="col-span-4 md:col-span-2 text-gray-600 text-center text-sm md:text-base">
              <span className="md:hidden">Harga: </span>Rp {product.price.toLocaleString('id-ID')}
            </div>
            <div className="col-span-4 md:col-span-2 text-gray-600 text-center text-sm md:text-base">
              <span className="md:hidden">Qty: </span>{qty}
            </div>
            <div className="col-span-4 md:col-span-2 text-gray-800 text-right font-medium text-sm md:text-base">
              Rp {subtotal.toLocaleString('id-ID')}
            </div>
          </div>
        </div>

        {/* Delivery & Payment */}
        <div className="bg-white rounded-sm shadow-sm p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-100 pb-6 mb-6 gap-4">
            <div className="flex items-center gap-2 text-gray-800 font-medium">
              <Truck className="w-5 h-5 text-[#ee4d2d]" />
              Opsi Pengiriman:
            </div>
            <div className="flex items-center gap-4">
              <select 
                value={delivery}
                onChange={(e) => setDelivery(e.target.value)}
                className="border border-gray-300 rounded-sm px-4 py-2 text-gray-700 focus:outline-none focus:border-[#ee4d2d]"
              >
                <option value="Translink">Translink (Reguler) - Rp 15.000</option>
                <option value="JNE">JNE (Reguler) - Rp 25.000</option>
                <option value="J&T">J&T (Reguler) - Rp 25.000</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-800 font-medium">
              <Receipt className="w-5 h-5 text-[#ee4d2d]" />
              Metode Pembayaran:
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => setPaymentMethod('Transfer Bank')}
                className={`border px-4 py-1.5 rounded-sm text-sm font-medium transition-colors ${paymentMethod === 'Transfer Bank' ? 'border-[#ee4d2d] text-[#ee4d2d]' : 'border-gray-300 text-gray-700 hover:border-gray-400'}`}
              >
                Transfer Bank
              </button>
              <button 
                onClick={() => setPaymentMethod('COD')}
                className={`border px-4 py-1.5 rounded-sm text-sm font-medium transition-colors ${paymentMethod === 'COD' ? 'border-[#ee4d2d] text-[#ee4d2d]' : 'border-gray-300 text-gray-700 hover:border-gray-400'}`}
              >
                COD
              </button>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-sm shadow-sm p-6 flex flex-col items-end">
          <div className="w-full md:w-1/3 flex flex-col gap-3 text-sm text-gray-600 mb-6">
            <div className="flex justify-between">
              <span>Subtotal untuk Produk:</span>
              <span>Rp {subtotal.toLocaleString('id-ID')}</span>
            </div>
            <div className="flex justify-between">
              <span>Total Ongkos Kirim:</span>
              <span>Rp {shippingFee.toLocaleString('id-ID')}</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-800">Total Pembayaran:</span>
              <span className="text-2xl font-medium text-[#ee4d2d]">Rp {total.toLocaleString('id-ID')}</span>
            </div>
          </div>
          <button 
            onClick={handleOrder}
            className="w-full md:w-64 bg-[#ee4d2d] text-white py-3 rounded-sm font-medium hover:bg-[#d73d22] transition-colors"
          >
            Buat Pesanan
          </button>
        </div>
      </main>
    </div>
  );
}
