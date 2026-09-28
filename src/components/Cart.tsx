import { RiShoppingCart2Line } from "@remixicon/react";
import PaymentPanel from "./PaymentPanel";
import { useCallback, useEffect, useState } from "react";
import { getCart } from "@/services/cartServices";
import type { CartItemType } from "@/types/cartItem";
import CartItem from "./CartItem";

function Cart() {
  const [shoppingCart, setShoppingCart] = useState<CartItemType[]>(getCart());

  // step 4
  const calculateTotal = useCallback(() => {
    shoppingCart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [shoppingCart]);

  // step 5
  useEffect(() => {
    calculateTotal();
  }, [calculateTotal]);

  // step 1
  function handleIncrement(id: number) {
    // increase item quantity
    setShoppingCart((prevCollection) =>
      prevCollection.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  // step 2
  function handleDecrement(id: number, quantity: number) {
    if (quantity === 1) {
      // delete row from UI
      setShoppingCart(shoppingCart.filter((item) => item.id !== id));
    } else {
      // decrease item quantity
      setShoppingCart((prevCollection) =>
        prevCollection.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        ),
      );
    }
  }

  return (
    <section>
      <h1 className="text-3xl flex gap-2 items-center">
        <RiShoppingCart2Line size={32} />
        ShoppingCart
      </h1>

      {/* step 3 */}
      <div className="grid md:grid-cols-4 gap-4 my-12">
        <ul className="flex flex-col gap-6 border bg-gray-100 border-gray-200 rounded-lg p-4 md:col-span-3">
          {shoppingCart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
            />
          ))}
        </ul>

        {/* step 6 */}
        <PaymentPanel
          totalPayment={shoppingCart.reduce(
            (total, item) => total + item.price * item.quantity,
            0,
          )}
        />
      </div>
    </section>
  );
}

export default Cart;
