
const dontEatMeat = {
    conditions: {
        any: [{
                fact:'feedType',
                operator: 'equal',
                value: 'VEGETARIANO'
            },
            {
                fact:'feedType',
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


