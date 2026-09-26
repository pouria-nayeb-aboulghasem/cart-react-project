import { priceFormatter } from "@/utils/price";
import { RiArrowRightLine } from "@remixicon/react";

type PaymentPanelProps = {
  totalPayment: number;
};

function PaymentPanel({ totalPayment }: PaymentPanelProps) {
  return (
    <div className="md:col-span-1 bg-gray-100 p-4 rounded-lg md:self-start">
      <h5 className="text-2xl">Payment Details</h5>

      <div className="my-6 font-bold flex justify-between">
        <span>Total</span>
        <span>${priceFormatter(totalPayment)}</span>
      </div>

      <div className="my-6 font-bold flex justify-between">
        <span>Discount</span>
        <span>0</span>
      </div>

      <div className="mt-8 mb-4">
        <button className="w-full flex gap-2 items-center justify-center bg-pink-800 text-white py-2 rounded-lg cursor-pointer hover:bg-pink-700 duration-300 transition-colors">
          Order
          <RiArrowRightLine size={16} />
        </button>
      </div>
    </div>
  );
}

export default PaymentPanel;
