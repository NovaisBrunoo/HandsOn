import { ReactNode } from 'react';

export interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

 export const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="modal-container bg-white mx-auto rounded-2xl shadow-lg z-50 w-96">
        <div className="modal-content p-4">
          <div className="modal-header flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">{title}</h2>
            <button
              onClick={onClose}
              className="modal-close  cursor-pointer text-3xl"
            >&times;</button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  )
}