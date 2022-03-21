import React from "react";
import { InputText } from "primereact/inputtext";
import classNames from "classnames";
import { ColumnProps } from "primereact/column";
import { DropdownProps } from "primereact/dropdown";

import { CancelClose16px, Search16px } from "../../../resources";

/**
 * Here is an example of the simple filter input. Check STable for how to use with Table
 */

interface ISSearchInputFilter {
    /**
     * Type of filtering like contains, in, equals
     */
    filtering?: ColumnProps["filterMatchMode"];
    /**
     * current index of the filter in state array
     */
    filterIndex?: number;
    /**
     * field name used to filter
     */
    fieldName?: string;
    /**
     * You can pass children like a label or icon
     */
    className?: string;
    /**
     * current search value - use state
     */
    searchValue?: string;
    /**
     * USE FOR TABLE FILTER
     * Method receives the Input Event and additionally a boolean can be added for clearingFilter
     */
    onTableSearchChange?: (
        e: DropdownProps["onChange"],
        fieldName: string,
        index: number,
        dataType: string,
        filtering?: ColumnProps["filterMatchMode"],
        clear?: boolean
    ) => void;
    /**
     * Placeholder for Input Text
     */
    placeholder?: string;
    /**
     * defines data-type that is used for backend filtering method
     */
    dataType?: string;
    /**
     * defines if you want to use it as a table filter or normal searchInput
     */
    tableFilter?: boolean;
    /**
     * USE FOR SIMPLE FILTER
     * use setState fkt
     */
    setSearchValue?: (searchValue: string) => void;
}

const SSearchInputFilter: React.FunctionComponent<ISSearchInputFilter> = ({
    filtering,
    filterIndex,
    fieldName,
    className,
    searchValue,
    onTableSearchChange,
    placeholder,
    dataType,
    tableFilter,
    setSearchValue,
}) => {
    return (
        <div className={classNames("SSearchInputFilter d-flex", className)}>
            <InputText
                value={searchValue ?? ""}
                onChange={(e) =>
                    tableFilter
                        ? onTableSearchChange && onTableSearchChange(e as any, fieldName!, filterIndex!, dataType!, filtering!)
                        : setSearchValue && setSearchValue(e.target.value)
                }
                placeholder={placeholder}
                className="SSearchInputFilter--input"
            />
            {searchValue?.length ? (
                <div
                    className="d-flex SSearchInputFilter--btn pointer"
                    onClick={(e) =>
                        tableFilter
                            ? onTableSearchChange && onTableSearchChange(e as any, fieldName!, filterIndex!, dataType!, filtering!, true)
                            : setSearchValue && setSearchValue("")
                    }
                >
                    <CancelClose16px />
                </div>
            ) : (
                <div className="d-flex SSearchInputFilter--btn">
                    <Search16px />
                </div>
            )}
        </div>
    );
};

export default SSearchInputFilter;
