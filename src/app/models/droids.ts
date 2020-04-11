
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

export interface Attributes6 {
    name: string;
    image: string;
}

export interface Terrain {
    attributes: Attributes6;
}

export interface Terrains {
    terrain: Terrain[];
}

export interface Attributes7 {
    name: string;
}

export interface Skill {
    attributes: Attributes7;
    value: number;
}

export interface Skills {
    skill: Skill[];
}

// tslint:disable-next-line: no-empty-interface
export interface Weapons {
}

export interface Attributes8 {
    uid: string;
    name: string;
    href: string;
}

export interface Material {
    attributes: Attributes8;
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
    sensors: number;
    ecm: number;
    batchQuantity: number;
    weight: Weight;
    volume: Volume;
    weightCapacity: WeightCapacity;
    volumeCapacity: VolumeCapacity;
    hull: number;
    shield: number;
    ionicCapacity: number;
    terrains: Terrains;
    skills: Skills;
    weapons: Weapons;
    materials: Materials;
    price: Price;
    images: Images;
}

export interface Droids {
    version: string;
    timestampSwc: number;
    typesEntity: TypesEntity;
}


