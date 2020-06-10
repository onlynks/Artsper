export interface Filters {
    [propName: string]: {
        displayName: string, 
        filterValues?: FilterValues[]
    }
}

class FilterValues {    
    label: string;
    value: string;
    checked?: boolean = false;
}

export interface QueryParam {
    paramName: string,
    paramValue: string
}

export const filters: Filters =  {
    id_category: {
        displayName: 'catégorie',
        filterValues: [
    {
        label: 'Peinture',
        value: '6'
    },
    {
        label: 'Photographie',
        value: '9'
    },
    {
        label: 'Sculture',
        value: '5'
    },
    {
        label: 'Dessin',
        value: '23'
    },
    {
        label: 'Edition',
        value: '15'
    },
    ]},
    price: {
        displayName: 'prix', 
        filterValues: [
        {
            label: '< 500 €',
            value: '0-500'
        },
        {
            label: '500 € - 1 000 €',
            value: '500-1000'
        },
        {
            label: '1 000 € - 2 500 €',
            value: '1000-2500'
        },
        {
            label: '5 000 € - 10 000 €',
            value: '5000-10000'
        },
        {
            label: '10 000 € - 50 000 €',
            value: '10000-50000'
        },
    ]},
    sort: {
        displayName: 'ordre d`\'affichage', 
        filterValues: [
        {
            label: 'Alphabétique (A - Z)',
            value: '1'
        },
        {
            label: 'Alphabétique (Z - A)',
            value: '2'
        },
        {
            label: 'Prix croissant',
            value: '3'
        },
        {
            label: 'Prix décroissant',
            value: '4'
        },
        {
            label: 'Ajoutées récemment',
            value: '11'
        },
        {
            label: 'Popularité',
            value: '13'
        }
    ]},
    ipp: {
        displayName: 'nombre d\'éléments par page', 
        filterValues: [
        {
            label: '60 Produits par page',
            value: '60'
        },
        {
            label: '100 Produits par page',
            value: '500-1000'
        },
        {
            label: '200 Produits par page',
            value: '1000-2500'
        }
    ]}
}