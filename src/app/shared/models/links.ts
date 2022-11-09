export default class Links {
    name!: string;
    icon!: string;
    route?: string;
    children?: ChildLink[];
}

class ChildLink {
    name!: string;
    route!: string;
}