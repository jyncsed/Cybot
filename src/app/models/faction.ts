export interface Welcome {
    version?: string;
    timestampSwc?: number;
    faction?: Faction;
}

export interface Faction {
    attributes?: FactionAttributes;
    uid?: string;
    name?: string;
    description?: string;
    category?: string;
    colour?: Colour;
    type?: Leader;
    leader?: Leader;
    secondInCommand?: Leader;
    foundationDate?: FoundationDate;
    ircRoom?: string;
    homepage?: string;
    recruitmentLiaisons?: RecruitmentLiaisons;
    datacards?: Datacards;
    images?: Images;
    credits?: Budgets;
    budgets?: Budgets;
    members?: Budgets;
    inventories?: Budgets;
    events?: Budgets;
}

export interface FactionAttributes {
    isbasic?: string;
}

export interface Budgets {
}

export interface Colour {
    r?: number;
    g?: number;
    b?: number;
}

export interface Datacards {
    datacard?: Datacard[];
}

export interface Datacard {
    attributes?: DatacardAttributes;
}

export interface DatacardAttributes {
    uid?: string;
    name?: string;
    href?: string;
}

export interface FoundationDate {
    timestampSwc?: number;
    timestampCGT?: string;
}

export interface Images {
    logo?: string;
    horizontalBanner?: string;
    verticalBanner?: string;
}

export interface Leader {
    attributes?: LeaderAttributes;
    value?: string;
}

export interface LeaderAttributes {
    uid?: string;
    href?: string;
}

export interface RecruitmentLiaisons {
    character?: Leader[];
}
