import classNames from "classnames";
import { Dropdown } from "primereact/dropdown";
import { PaginatorTemplate } from "primereact/paginator";
import React, { ReactElement } from "react";
import { GoToEnd16px, GoToStart16px, NextForward24px, PreviousBack24px } from "../../../../resources";

interface IPaginationTemplate {
    showReport?: boolean;
    showRowsPerPage?: boolean;
    rowsPerPageOptions?: number[];
    rowsDropdownLabel: string;
}

export const getPaginationTemplate = (options: IPaginationTemplate): PaginatorTemplate => {
    const { rowsDropdownLabel, rowsPerPageOptions, showReport, showRowsPerPage } = options;
    const paginatorTemplate: PaginatorTemplate = {
        layout: `${classNames(
            "FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink",
            { CurrentPageReport: showReport },
            { RowsPerPageDropdown: showRowsPerPage }
        )}`,
        RowsPerPageDropdown: (options): ReactElement => {
            const dropdownOptions = rowsPerPageOptions
                ? rowsPerPageOptions.map((option) => {
                      return { label: option, value: option };
                  })
                : [];

            return (
                <div className="p-rows-per-page">
                    <span className="p-rows-per-page-label">{rowsDropdownLabel ?? null}</span>
                    <Dropdown
                        className="p-rows-per-page-dropdown"
                        value={options.value}
                        options={dropdownOptions}
                        onChange={options.onChange}
                    />
                </div>
            );
        },
        FirstPageLink: (options): ReactElement => {
            return (
                <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
                    <GoToStart16px className={classNames("medium", options.disabled ? "gray-6" : "black")} />
                </button>
            );
        },
        PrevPageLink: (options): ReactElement => {
            return (
                <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
                    <PreviousBack24px className={classNames("large", options.disabled ? "gray-6" : "black")} />
                </button>
            );
        },
        NextPageLink: (options): ReactElement => {
            return (
                <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
                    <NextForward24px className={classNames("large", options.disabled ? "gray-6" : "black")} />
                </button>
            );
        },
        LastPageLink: (options): ReactElement => {
            return (
                <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
                    <GoToEnd16px className={classNames("medium", options.disabled ? "gray-6" : "black")} />
                </button>
            );
        },
        PageLinks: (options) => {
            if (
                (options.view.startPage === options.page && options.view.startPage !== 0) ||
                (options.view.endPage === options.page && options.page + 1 !== options.totalPages)
            ) {
                const className = classNames(options.className, { "p-disabled": true });

                return (
                    <span className={className} style={{ userSelect: "none" }}>
                        ...
                    </span>
                );
            }

            return (
                <button type="button" className={options.className} onClick={options.onClick}>
                    {options.page + 1}
                </button>
            );
        },
        CurrentPageReport: (options) => {
            return <span className={options.className}>{`${options.first} bis ${options.last} von ${options.totalRecords}`}</span>;
        },
    };
    return paginatorTemplate;
};
