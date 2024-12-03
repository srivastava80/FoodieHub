import { useState } from 'react';
import { OrderDetails } from '../types';

interface CheckoutFormProps {
  totalAmount: number;
  onClose: () => void;
  onSubmit: (orderDetails: OrderDetails) => void;
}

export default function CheckoutForm({
  totalAmount,
  onClose,
  onSubmit,
}: CheckoutFormProps) {
  const [formData, setFormData] = useState<OrderDetails>({
    name: '',
    phone: '',
    address: '',
    paymentMode: 'cod',
    totalAmount,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Checkout</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border rounded"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Phone</label>
            <input
              type="tel"
              required
              className="w-full px-3 py-2 border rounded"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Delivery Address</label>
            <textarea
              required
              className="w-full px-3 py-2 border rounded"
              rows={3}
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Payment Mode</label>
            <select
              className="w-full px-3 py-2 border rounded"
              value={formData.paymentMode}
              onChange={(e) => setFormData({ ...formData, paymentMode: e.target.value as 'cod' | 'upi' })}
            >
              <option value="cod">Cash on Delivery</option>
              <option value="upi">UPI</option>
            </select>
          </div>
          <div className="mb-6">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total Amount:</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-orange-600 text-white rounded-full"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}