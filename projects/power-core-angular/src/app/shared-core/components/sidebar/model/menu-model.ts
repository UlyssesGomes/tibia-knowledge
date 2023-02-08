export class MenuModel {
    name: string;    
    type: string;

    constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
    }
}

export class MenuGroupModel extends MenuModel {
    children: MenuItemModel [];
    open: boolean;
    icon: string;
    route: string;
    selected: boolean;

    constructor(name: string, route: string, icon: string, children: MenuItemModel[], selected = false) {
        super(name, 'group');
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

    constructor(name: string, route: string, selected = false) {
        super(name, 'item');
        this.route = route;
        this.selected = selected;
    }
}

export class MenuSectionModel extends MenuModel {
    constructor(name: string) {
        super(name, 'section')
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