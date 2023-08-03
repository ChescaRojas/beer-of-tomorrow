interface ValueUnit {
    value: number;
    unit: string;
}

interface Temp {
    temp: ValueUnit;
    duration?: number | null;
}

interface Method {
    mash_temp: Temp[];
    fermentation: Temp;
    twist?: string | null;
}

interface Malt {
    name: string;
    amount: ValueUnit;
}

interface Hop {
    name: string;
    amount: ValueUnit;
    add: string;
    attribute: string;
}

interface Ingredients {
    malt: Malt[];
    hops: Hop[];
    yeast: string;
}

interface Beer {
    id: number;
    name: string;
    tagline: string;
    first_brewed: string;
    description: string;
    image_url: string;
    abv: number;
    ibu?: number | null;
    target_fg: number;
    target_og: number;
    ebc?: number | null;
    srm?: number | null;
    ph?: number | null;
    attenuation_level: number;
    volume: ValueUnit;
    boil_volume: ValueUnit;
    method: Method;
    ingredients: Ingredients;
    food_pairing: string[];
    brewers_tips: string;
    contributed_by: string;
}
