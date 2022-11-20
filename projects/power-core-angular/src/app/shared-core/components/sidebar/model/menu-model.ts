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

    constructor(name: string, route: string, icon: string, children: MenuItemModel[]) {
        super(name, 'group');
        this.children = children;
        this.route = route;
        this.open = false;
        this.icon = icon;
        this.selected = false;
    }
}

export class MenuItemModel extends MenuModel { 
    route: string;
    selected: boolean;

    constructor(name: string, route: string) {
        super(name, 'item');
        this.route = route;
        this.selected = false;
    }
}

export class MenuSectionModel extends MenuModel {
    constructor(name: string) {
        super(name, '')
    }
}
