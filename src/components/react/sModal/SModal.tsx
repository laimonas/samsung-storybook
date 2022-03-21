import classNames from "classnames";
import React from "react";
import Modal from "react-bootstrap/Modal";

import { CancelClose24px } from "../../../resources/icons";
import SButton from "../sButton/SButton";

interface ISModal {
    className?: string;
    /**
     * Whether the modal should be displayed
     */
    show: boolean;
    /**
     * Pass through a footer elements wrapped in <div> <div> tags.
     * If nothing is passed then the header will be hidden,
     * and the close button will appear in the body.
     */
    headerNode?: React.ReactNode;
    /**
     * Elements that will be shown in the body of the modal.
     * If exceeds 80% of the viewport, a scrollbar will appear.
     */
    children: React.ReactNode;
    /**
     * close button functionality.
     */
    closeButtonOnClick: (show: boolean) => void;
    /**
     * Pass through a footer elements wrapped in <div> <div> tags.
     * If nothing is passed then the footer will be hidden.
     */
    footerNode?: React.ReactNode;
    /**
     * show/hide handler functions added due to bug in vendor library. Although they are declared as optional, they are being called always
     */
    onShow?: () => void;
    onHide?: () => void;
}

const SModal: React.FunctionComponent<ISModal> = ({
    className,
    show,
    headerNode,
    children,
    footerNode,
    closeButtonOnClick,
    onHide,
    onShow,
}) => {
    const closeButton = (closeButtonOnClick: (show: boolean) => void): React.ReactNode => {
        return (
            <SButton className="close" onClick={() => closeButtonOnClick(!show)}>
                <CancelClose24px />
            </SButton>
        );
    };

    return (
        <Modal
            onHide={onHide}
            onShow={onShow}
            className={classNames("s-modal", className)}
            size="lg"
            show={show}
            contentClassName="modal-container"
        >
            {headerNode && (
                <Modal.Header>
                    {headerNode}
                    {closeButton(closeButtonOnClick)}
                </Modal.Header>
            )}

            <Modal.Body>
                {!headerNode && closeButton(closeButtonOnClick)}
                {children}
            </Modal.Body>

            {footerNode && <Modal.Footer>{footerNode}</Modal.Footer>}
        </Modal>
    );
};

export default SModal;
