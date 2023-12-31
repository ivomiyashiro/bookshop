import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { XMarkIcon } from '@heroicons/react/24/solid';

import { createPayment } from '@/services';
import { CartContext } from '@/contexts/cart';

import { Button, Modal, Spinner } from '@/components';
import { CartItem } from './CartItem';

interface Props {
  open: boolean;
  handleOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartMenu = ({ open, handleOpen }: Props) => {
  const { cart, orderTotalPrice, totalProducts } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCheckout = async () => {
    const at = Cookies.get('ACCESS_TOKEN');

    try {
      if (!at) throw new Error('Unauthorized'); 
      
      setLoading(true);

      const { url } = await createPayment(cart, at);

      location.href = url;

    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'Unauthorized') {
          handleOpen(false);
          return router.push('/login?checkout=true');
        }
      }
    }
  };

  return (
    <Modal open={ open } handleOpen={ () => handleOpen(false) }>
      <aside className={ `fixed top-0 w-full md:w-[470px] right-0 h-screen bg-white dark:bg-gray-900 shadow-[0_35px_60px_-15px_rgba(0,0,0,.5)] z-50 md:rounded-l-2xl transition-all overflow-hidden ${ open ? 'translate-x-0' : 'translate-x-[100%]' }` }>
        <div className="flex flex-col h-full relative">
          <div className="p-4 shadow flex items-center justify-between">
            <h2 className="font-bold text-3xl">YOUR CART</h2>
            <Button 
              width="w-[36px]" 
              height="h-[36px]" 
              style="ALT" 
              aria-label="Close" 
              onClick={ () => handleOpen(false) }
            >
              <XMarkIcon width={ 28 } height={ 28 } strokeWidth={ 1.7 } />
            </Button>
          </div>
          { cart.length > 0
            ? ( <div className="p-4 h-full flex flex-col">
              <div className=" flex flex-col max-h-[530px] pb-6 gap-4 overflow-y-auto scrollbar-hidden">
                { cart.map(book => (
                  <CartItem 
                    key={ book.id } 
                    book={ book } 
                    handleCloseModal={ () => handleOpen(false) }
                  />
                )) }
              </div>
              <div className="px-4 py-6 border-t flex flex-col gap-4 w-full mt-auto">
                <div className="flex justify-between">
                  <p className="font-semibold">{ totalProducts } BOOKS</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-semibold">TOTAL</p>
                  <p className="font-semibold">$ { orderTotalPrice }</p>
                </div>
              </div>
              <Button
                height="h-16"
                style="PRIMARY"
                type="button"
                onClick={ handleCheckout }
              >
                { loading
                  ? <Spinner width="w-7" />
                  : ( <span className="font-bold ">
                      GO TO CHECKOUT
                  </span> ) } 
              </Button>
            </div> )
            : ( <div className="grid place-content-center h-full text-center">
              <p className="font-bold mb-6 text-2xl">YOUR CART IS EMPTY!</p>
              <div className="" onClick={ () => handleOpen(false) }>
                <Button 
                  style="PRIMARY"
                  type="link"
                  href="/books" 
                  className="w-[180px] h-[40px] mx-auto !text-[1em]"
                >
                  Shop Books
                </Button>
              </div>
            </div> ) }
        </div>
      </aside>
    </Modal>
  );
};

export default CartMenu;
