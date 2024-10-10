"use client";

import React from "react";
import { useRouter } from "next/navigation";

import css from "./modal.module.css";

type ModalProps = {
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ children }) => {
  const router = useRouter();

  return (
    <div className={css.modalWrap} onClick={() => router.back()}>
      <div className={css.modal}>{children}</div>
    </div>
  );
};

export default Modal;
