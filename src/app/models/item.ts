export interface Attributes {
    uid: string;
    value: string;
}

export interface Class {
    attributes: Attributes;
}

export interface Attributes2 {
    units: string;
}

export interface Weight {
    value: number;
    attributes: Attributes2;
}

export interface Attributes3 {
    units: string;
}

export interface Volume {
    value: number;
    attributes: Attributes3;
}

export interface Attributes4 {
    units: string;
}

export interface WeightCapacity {
    value: number;
    attributes: Attributes4;
}

export interface Attributes5 {
    units: string;
}

export interface VolumeCapacity {
    value: number;
    attributes: Attributes5;
}

export interface EquippableSlots {
    slot: string[];
}

export interface Weapons {
}

export interface Attributes6 {
    uid: string;
    name: string;
    href: string;
}

export interface Material {
    attributes: Attributes6;
    value: number;
}

export interface Materials {
    material: Material[];
}

export interface Price {
    credits: number;
}

export interface Images {
    small: string;
    large: string;
}

export interface TypesEntity {
    uid: string;
    name: string;
    description: string;
    class: Class;
    maxUses: number;
    lockable: string;
    batchQuantity: number;
    weight: Weight;
    volume: Volume;
    weightCapacity: WeightCapacity;
    volumeCapacity: VolumeCapacity;
    equippableSlots: EquippableSlots;
    weapons: Weapons;
    materials: Materials;
    price: Price;
    images: Images;
}

export interface Item {
    version: string;
    timestampSwc: number;
    typesEntity: TypesEntity;
}