import React from "react";

import classNames from "classnames";
import SButton from "../sButton/SButton";

export interface ISDragAndDropUpload {
    className?: string;
    title: string;
    footer: string;
    setFile: (file: File) => void;
}

export const SDragAndDropUpload: React.FunctionComponent<ISDragAndDropUpload> = ({ className, title, footer, setFile }) => {
    const fileInput: any = React.useRef(null);

    const handleClick = (event: any) => {
        fileInput.current.click();
    };

    const handleChange = (event: any) => {
        const fileUploaded = event.target.files[0];
        setFile(fileUploaded);
    };

    return (
        <div className={classNames("s-dragAndDropUpload", className)}>
            <div className="s-dragAndDropUpload title">{title}</div>
            <div className="s-dragAndDropUpload file-area">
                <span className="s-dragAndDropUpload file-area dd">per Drag & drop *</span>
                <div className={"s-dragAndDropUpload file-area orSentence"}>oder</div>
                <input className="s-dragAndDropUpload file-area file-input" type="file" ref={fileInput} onChange={handleChange} />
                <SButton
                    className={"btn-transparent"}
                    onClick={handleClick}
                    children={
                        <>
                            <span className="btn__text">Datei auswählen*</span>
                        </>
                    }
                />
            </div>
            <div className="s-dragAndDropUpload footer">{footer}</div>
        </div>
    );
};
export default SDragAndDropUpload;
