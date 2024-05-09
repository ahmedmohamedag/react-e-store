import { Dialog, Transition } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'
import Button from './Button'
interface IProps {
    isOpen: boolean,
    children?: ReactNode,
    title?: string,
    setIsOpen?: (isOpen: boolean) => void,
    closeModal: () => void
}

export default function Modal({ isOpen, closeModal, children, title }: IProps) {

    return (
        <>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    {/* Title */}
                                    {title && <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900">
                                        {title}
                                    </Dialog.Title>}

                                    <div className="my-2">
                                        {children}
                                    </div>
                                    {/* Add BUTTON */}
                                    <div className="flex">
                                        <Button width='w-full' className="  bg-green-500 " onClick={() => {
                                        }}>Add</Button>
                                        <Button width='w-full' className="  bg-red-500 " onClick={() => {
                                        }}>Remove</Button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
