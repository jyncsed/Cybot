export class Items {
    itemID: string;
    price: string;
}

export class Sections {
    type: string;
    items: Items[];
}

export class Products {
    sections: Sections[];
}
