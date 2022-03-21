import React from "react";
import { ToastContainer, toast, ToastOptions } from "react-toastify";

/**
 * General Info: https://fkhadra.github.io/react-toastify/introduction
 */

interface ISSnackbar {
    /**
     * Provide the event message to be displayed
     */
    eventMessage: string;
    /**
     * Provide a boolean to signify if you would like a close button to be displayed
     */
    closeButton?: boolean;
    /**
     * Provide the text used for the close button
     */
    closeButtonText: string;
    /**
     * Called when toast is unmounted.
     */
    onClose?: () => void;
}

interface ICloseButton {
    closeButtonText: string;
    closeToast?: () => void;
    onClose?: () => void;
}

const CloseButton: React.FunctionComponent<ICloseButton> = ({ closeButtonText, closeToast, onClose }) => (
    <div className="snack-btn">
        <button
            className="btn-v2 btn-underline-white"
            onClick={() => {
                closeToast && typeof closeToast === "function" && closeToast();
                onClose && typeof onClose === "function" && onClose();
            }}
        >
            {closeButtonText}
        </button>
    </div>
);

const SSnackbar: React.FunctionComponent<ISSnackbar> = ({ eventMessage, closeButton, closeButtonText, onClose }) => {
    (() => {
        toast(eventMessage, {
            onClose: onClose,
        });
    })();

    return (
        <div>
            <ToastContainer
                className="snackbar-v2"
                position="bottom-center"
                autoClose={7000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                limit={1}
                closeButton={closeButton && <CloseButton closeButtonText={closeButtonText} onClose={onClose} />}
            />
        </div>
    );
};

SSnackbar.defaultProps = {
    closeButton: true,
};

export default SSnackbar;
