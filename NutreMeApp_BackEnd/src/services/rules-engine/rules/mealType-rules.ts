const recommendedMealBreakfast = {
    conditions: {
        any: [{
                fact:'recommendedMeal',
                operator: 'equal',
                value: 'DESAYUNO'
            },
        ]   
    },
    event: {
        params: {
            filters: [
                {recomendedMeals:{$eq: 'DESAYUNO'}}
            ]
        }
    },
    priority: 10
}

const recommendedMidday = {
    conditions: {
        any: [{
                fact:'recommendedMeal',
                operator: 'equal',
                value: 'MEDIODIA'
            },
        ]   
    },
    event: {
        params: {
            filters: [
                {recomendedMeals:{$eq: 'MEDIODIA'}}
            ]
        }
    },
    priority: 10
}

const recommendedMealLunch = {
    conditions: {
        any: [{
                fact:'recommendedMeal',
                operator: 'equal',
                value: 'ALMUERZO'
            },
        ]   
    },
    event: {
        params: {
            filters: [
                {recomendedMeals:{$eq: 'ALMUERZO'}}
            ]
        }
    },
    priority: 10
}


const recommendedAfternoonSnack = {
    conditions: {
        any: [{
                fact:'recommendedMeal',
                operator: 'equal',
                value: 'MERIENDA'
            },
        ]   
    },
    event: {
        params: {
            filters: [
                {recomendedMeals:{$eq: 'MERIENDA'}}
            ]
        }
    },
    priority: 10
}

export const recommendedDinner = {
    conditions: {
        any: [{
                fact:'recommendedMeal',
                operator: 'equal',
                value: 'CENA'
            },
        ]   
    },
    event: {
        params: {
            filters: [
                {recomendedMeals:{$eq: 'CENA'}}
            ]
        }
    },
    priority: 10
}

export const recommendedPreTraining = {
    conditions: {
        any: [{
                fact:'recommendedMeal',
                operator: 'equal',
                value: 'PRE_ENTRENO'
            },
        ]   
    },
    event: {
        params: {
            filters: [
                {recomendedMeals:{$eq: 'PRE_ENTRENO'}}
            ]
        }
    },
    priority: 10
}

export const recommendedPostTraining = {
    conditions: {
        any: [{
                fact:'recommendedMeal',
                operator: 'equal',
                value: 'POST_ENTRENO'
            },
        ]   
    },
    event: {
        params: {
            filters: [
                {recomendedMeals:{$eq: 'POST_ENTRENO'}}
            ]
        }
    },
    priority: 10
}

const recommendedAppetizers = {
    conditions: {
        any: [{
                fact:'recommendedMeal',
                operator: 'equal',
                value: 'APERITIVOS'
            },
        ]   
    },
    event: {
        params: {
            filters: [
                {recomendedMeals:{$eq: 'APERITIVOS'}}
            ]
        }
    },
    priority: 10
}

export const recommendedGeneric = {
    conditions: {
        any: [{
                fact:'recommendedMeal',
                operator: 'equal',
                value: 'GENERICO'
            },
        ]   
    },
    event: {
        params: {
            filters: [
                {recomendedMeals:{$eq: 'GENERICO'}}
            ]
        }
    },
    priority: 10
}

export const rules  = [
    recommendedMealLunch,
    recommendedMealBreakfast,
    recommendedMidday,
    recommendedAfternoonSnack,
    recommendedDinner,
    recommendedPreTraining,
    recommendedPostTraining,
    recommendedAppetizers,
    recommendedGeneric
]

export default rules; 