import React, { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { PresenceModalColors, PresenceModalText } from '../constants';

interface PresenceModalProps {
  setOpen: (open: boolean) => void;
  id?: string;
  link?: string;
  item?: any;
}

function PresenceModal({ setOpen, id, link, item }: PresenceModalProps) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [showLink, setShowLink] = useState(false);
  const Text = PresenceModalText
  const Colors = PresenceModalColors

  const handleClose = () => setOpen(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setError(false);
  };

  const onSubmit: SubmitHandler<any> = async (name) => {
    const data = { name };
    fetch('/api/createAttendance', {
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
      handleClose();
      onSubmit(input);
    } else {
      setError(true);
    }
  };

  const handleScrollToBottom = () => {
    setOpen(false);
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <div
      id="default-modal"
      tabIndex={-1}
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden fixed inset-0 z-50 flex items-center justify-center"
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative" style={{ backgroundColor: Colors.modalBackground, borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t" style={{ borderColor: '#e5e7eb' }}>
            <h3 className="text-xl font-semibold" style={{ color: Colors.modalText }}>
              {Text.confirmPresence}
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
            <p className="text-base leading-relaxed" style={{ color: Colors.textSecondary }}>
              {Text.instruction}
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

          <div className='flex justify-end p-4'>
            <button
              data-modal-hide="default-modal"
              type="button"
              onClick={handleConfirm}
              className={`text-white bg-[${Colors.buttonPrimary}] hover:bg-[${Colors.buttonHover}]`}
              style={{
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
                padding: '0.625rem 1.25rem'
              }}
            >
              {Text.submitButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PresenceModal;
