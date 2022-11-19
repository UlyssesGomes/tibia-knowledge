export class MenuModel {
    name: string;    
    route: string;
    type: string;

    constructor(name: string, route: string, type: string) {
        this.name = name;
        this.route = route;
        this.type = type;
    }
}

export class MenuGroupModel extends MenuModel {
    children: MenuItemModel [];
    open: boolean;
    icon: string;

    constructor(name: string, route: string, icon: string, children: MenuItemModel[]) {
        super(name, route, 'group');
        this.children = children;
        this.open = false;
        this.icon = icon;
    }
}

export class MenuItemModel extends MenuModel { 
    constructor(name: string, route: string) {
        super(name, route, 'item');
    }
}
