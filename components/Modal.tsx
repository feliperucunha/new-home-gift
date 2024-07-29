import React, { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { GiftModalColors, GiftModalText } from '../constants';

interface ModalProps {
  setOpen: (open: boolean) => void;
  id?: string;
  link?: string;
  item?: string;
}

function Modal({ setOpen, id, link, item }: ModalProps) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [showLink, setShowLink] = useState(false);
  const Text = GiftModalText
  const Colors = GiftModalColors

  const handleClose = () => {
    setOpen(false);
    if (showLink) {
      window.location.reload();
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setError(false);
  };

  const onSubmit: SubmitHandler<any> = async (name) => {
    const data = { _id: id, name };
    fetch('/api/createComment', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log("submitted");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleConfirm = () => {
    if (input) {
      setShowLink(true);
      onSubmit(input);
      setInput('');
    } else {
      setError(true);
    }
  };

  const handleScrollToBottom = () => {
    setOpen(false);
    window.scrollTo(0, document.body.scrollHeight);
    setInput('');
  };

  return (
    <div
      id="default-modal"
      tabIndex={-1}
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden fixed inset-0 z-50 flex items-center justify-center"
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div
          className="relative"
          style={{
            backgroundColor: Colors.modalBackground,
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div
            className="flex items-center justify-between p-4 md:p-5 border-b rounded-t"
            style={{ borderColor: Colors.borderGray }}
          >
            <h3
              className="text-xl font-semibold"
              style={{ color: Colors.modalText }}
            >
              {showLink ? Text.thankYou : Text.confirmation}
            </h3>
            <button
              type="button"
              onClick={handleClose}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-4">
            <p
              className="text-base leading-relaxed"
              style={{ color: Colors.textGray }}
            >
              {showLink
                ? Text.instructionLink.replace('{item}', item || '')
                : Text.instructionReserve}
            </p>
            {!showLink && (
              <input
                type="text"
                value={input}
                onChange={handleInput}
                className={`w-full rounded-md ${!error ? "" : `border ${Colors.borderError}`}`}
              />
            )}
          </div>
          {showLink && (
            <div className="flex justify-center p-3 py-9">
              <a
                data-modal-hide="default-modal"
                href={link}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {Text.linkButton}
              </a>
              <button
                data-modal-hide="default-modal"
                type="button"
                onClick={handleScrollToBottom}
                className="text-white bg-green-700 ml-2 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                {Text.pixButton}
              </button>
            </div>
          )}
          {!showLink && (
            <div className="flex items-center justify-end p-4 md:p-5 border-t" style={{ borderColor: Colors.borderGray }}>
              <button
                data-modal-hide="default-modal"
                type="button"
                onClick={handleClose}
                className="py-2.5 mr-2 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                {Text.cancelButton}
              </button>
              <button
                data-modal-hide="default-modal"
                type="button"
                onClick={handleScrollToBottom}
                className="text-white bg-green-700 mr-2 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                {Text.pixButton}
              </button>
              <button
                data-modal-hide="default-modal"
                type="button"
                onClick={handleConfirm}
                className="text-white bg-[#c19157] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                {Text.reserveButton}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
