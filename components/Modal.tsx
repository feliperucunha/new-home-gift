import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'

function Modal({ setOpen, id, link, item }: any) {
  const [input, setInput] = useState("")
  const [error, setError] = useState(false)
  const [showLink, setShowLink] = useState(false)
  const handleClose = () => setOpen(false)

  const handleInput = (e: any) => {
    setInput(e.target.value)
    setError(false)
  }

  const onSubmit: SubmitHandler<any> = async (name) => {
    const data = { _id: id, name }
    fetch('/api/createComment', {
      method: 'POST',
      body: JSON.stringify(data)
    }).then(() => {
      console.log("submitted")
    }).catch((error): any => {
      console.log(error)
    });
  };

  const handleConfirm = () => {
    if (input) {
      setShowLink(true)
      onSubmit(input)
    } else {
      setError(true)
    }
  }

  const handleScrollToBottom = () => {
    setOpen(false)
    window.scrollTo(0, document.body.scrollHeight)
  }

  return (
    <div
      id="default-modal"
      tabIndex={-1}
      aria-hidden="true"
      className="overflow-y-auto overflow-x-hidden fixed inset-0 z-50 flex items-center justify-center"
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {showLink ? "Muito obrigado!" : "Tem certeza?"}
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
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {showLink ? `Agora que você reservou o item '${item}', você pode comprar pelo link abaixo ou pela loja da sua escolha.` : 'Ao clicar em aceitar você estará reservando este presente para que possa comprar pelo link fornecido aqui ou em outra loja. Por favor, preencha abaixo seu nome.'}
            </p>
            {!showLink && (
              <input type="text" value={input} onChange={handleInput} className={`w-full rounded-md ${!error ? "" : "border-red-500 border"}`} />
            )}
          </div>
          {showLink && (
            <div className='flex justify-center p-3 pt-1'>
              <a
                data-modal-hide="default-modal"
                type="button"
                href={link}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Link
              </a>
            </div>
          )}
          {!showLink && (
            <div className="flex items-center justify-end p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="default-modal"
                type="button"
                onClick={handleClose}
                className="py-2.5 mr-2 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Cancelar
              </button>
              <button
                data-modal-hide="default-modal"
                type="button"
                onClick={handleScrollToBottom}
                className="text-white bg-green-700 mr-2 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Mandar o Pix
              </button>
              <button
                data-modal-hide="default-modal"
                type="button"
                onClick={handleConfirm}
                className="text-white bg-[#c19157] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Reservar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>

  )
}

export default Modal