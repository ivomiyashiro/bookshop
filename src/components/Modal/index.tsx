'use client';
import { Dispatch, MouseEvent, ReactNode, SetStateAction, useId, useRef } from 'react';

interface Props {
  children: ReactNode;
  open: boolean;
  className?: string;
  handleOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({ children, open, className, handleOpen }: Props) => {
  const id = useId();
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === modalRef.current) {
      handleOpen(false);
    }
  };

  return (
    <div 
      id={ id } 
      tabIndex={ -1 } 
      className={ `fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen max-h-full bg-[rgba(0,0,0,.5)] dark:bg-gray-alpha-500 ${ open ? 'block' : 'hidden' } ${ className }` }
      ref={ modalRef }
      onClick={ handleClick }
    >
      { children }
    </div>
  );
};

export default Modal;
