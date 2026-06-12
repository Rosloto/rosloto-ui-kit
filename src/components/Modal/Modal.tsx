import React from 'react';

export interface ModalProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
}

export const Modal = ({
  title,
  children,
  isOpen
}: ModalProps) => {

  if (!isOpen) return null;

  return (
    <div className="rl-modal-overlay">
      <div className="rl-modal">
        <h2>{title}</h2>

        <div className="rl-modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};
