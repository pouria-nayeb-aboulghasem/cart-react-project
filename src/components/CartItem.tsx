import type { CartItemType } from "@/types/cartItem";
import { priceFormatter } from "@/utils/price";
import { RiAddLine, RiDeleteBin6Line, RiSubtractLine } from "@remixicon/react";

type CartItemProps = {
  item: CartItemType;
  handleIncrement: (id: number) => void;
  handleDecrement: (id: number, quantity: number) => void;
};

function CartItem({ item, handleDecrement, handleIncrement }: CartItemProps) {
  const { image, title, feature, quantity, price } = item;

  return (
    <li className="grid md:grid-cols-4 gap-3 items-center py-4 cart-item relative">
      <figure>
        <img
          src={`/src/assets/${image}`}
          alt={`${title}`}
          width="128"
          height="91"
          className="rounded-lg"
        />
      </figure>

      <div>
        <p className="font-bold">{title}</p>
        {feature ? <p className="text-gray-400">{feature}</p> : ""}
      </div>

      <div className="flex gap-2 items-center md:justify-self-center order-2 md:order-1">
        <button
          onClick={() => handleDecrement(item.id, item.quantity)}
          className="w-8 h-8 flex justify-center items-center rounded-lg bg-gray-200 cursor-pointer hover:bg-gray-300 duration-300 transition-colors"
        >
          {quantity === 1 ? (
            <RiDeleteBin6Line size={16} color="red" />
          ) : (
            <RiSubtractLine size={16} />
          )}
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => handleIncrement(item.id)}
          className="w-8 h-8 flex justify-center items-center rounded-lg bg-gray-200 cursor-pointer hover:bg-gray-300 duration-300 transition-colors"
        >
          <RiAddLine size={16} />
        </button>
      </div>

      <div className="text-lg font-bold order-1 md:order-2">
        ${priceFormatter(price)}
      </div>
    </li>
  );
}

export default CartItem;
