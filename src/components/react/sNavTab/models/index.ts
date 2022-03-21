export interface ISNavTab {
    className?: string;
    navItems: ISNavItem[];
    activeItem: number;
    setActiveItem: (activeItem: number) => void;
}

export interface ISNavTabItem {
    className?: string;
    item: ISNavItem;
    activeItem?: number;
    onSetActiveItem: (activeIndex: number) => void;
    index: number;
}

export interface ISNavItem {
    link: string;
    label: string;
}
