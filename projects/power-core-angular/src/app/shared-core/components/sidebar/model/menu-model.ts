export class MenuModel {
    static ID: number = 0;
    id: number;
    name: string;    
    type: string;
    icon: string;

    constructor(name: string, type: string, icon: string) {
        this.name = name;
        this.type = type;
        this.icon = icon;
        this.id = MenuModel.ID;
        MenuModel.ID++;
    }
}

export class MenuGroupModel extends MenuModel {
    children: MenuItemModel [];
    open: boolean;
    route: string;
    selected: boolean;

    constructor(name: string, route: string, icon: string, children: MenuItemModel[], selected = false) {
        super(name, 'group', icon);
        this.children = children;
        this.route = route;
        this.open = false;
        this.icon = icon;
        this.selected = selected;
    }
}

export class MenuItemModel extends MenuModel { 
    route: string;
    selected: boolean;

    constructor(name: string, route: string, icon: string = '', selected = false) {
        super(name, 'item', icon);
        this.route = route;
        this.selected = selected;
    }
}

export class MenuSectionModel extends MenuModel {
    constructor(name: string) {
        super(name, 'section', '');
    }
}

export class SidebarColorScheme {
    headerBackgroundColor: string;
    headerColor: string;
    contentBackgroundColor: string;
    contentColor: string;
    selectedLight: boolean;

    constructor(headerBackgroundColor, headerColor, contentBackgroundColor, contentColor, selectedColor: SelectedColor = SelectedColor.LIGHT) {
        this.headerBackgroundColor = headerBackgroundColor;
        this.headerColor = headerColor;
        this.contentBackgroundColor = contentBackgroundColor;
        this.contentColor = contentColor;
        this.selectedLight = selectedColor === SelectedColor.LIGHT? true : false;
    }
}

export enum SelectedColor {
    LIGHT = 'select-hover-light',
    DARK = 'select-hover-dark'
};