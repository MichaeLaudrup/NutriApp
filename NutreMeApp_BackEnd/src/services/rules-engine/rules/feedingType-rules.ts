
const dontEatMeat = {
    conditions: {
        any: [{
                fact:'feedingType',
                operator: 'equal',
                value: 'VEGETARIANO'
            },
            {
                fact:'feedingType',
                operator: 'equal',
                value: 'VEGANO'
            },
        ]   
    },
    event: {
        type: 'No meat',
        params: {
            notMeat: true
        }
    }
}

export const rules  = [
    dontEatMeat,
]


