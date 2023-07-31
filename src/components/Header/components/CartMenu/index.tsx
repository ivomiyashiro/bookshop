import { Dispatch, SetStateAction } from 'react';
import { Modal } from '@/components';

interface Props {
  open: boolean;
  handleOpen: Dispatch<SetStateAction<boolean>>;
}

const CartMenu = ({ open, handleOpen }: Props) => {
  return (
    <Modal 
      open={ open } 
      handleOpen={ handleOpen }
    >
      <aside className="absolute right-0">
        Cart Menu
      </aside>
    </Modal>
  );
};

export default CartMenu;
