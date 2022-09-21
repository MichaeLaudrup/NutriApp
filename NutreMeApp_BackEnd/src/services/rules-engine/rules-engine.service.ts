const {Engine} = require('json-rules-engine'); 
import { rules } from "./rules/feedingType-rules";
export class RulesEngine {
    engine = new Engine(); 

    engineResult: {
        not_equal: {}[]
    } = {
        not_equal: []
    }

    not_equal: string [] = []
    constructor(){ 
        rules.forEach( rule => {
            this.engine.addRule(rule); 
        })
    }

    async probeFact( fact: any): Promise<any>{
        const {events} =await this.engine.run(fact);
        let complexQuery: {$and: any[]} = { $and: []}
        events.forEach( (event: any) => {
            event.params.filters.forEach( (filter: any) => {
                complexQuery.$and.push(filter)
            })
            console.log(JSON.stringify(complexQuery))
        }); 
        if(complexQuery.$and.length > 0){
            return complexQuery; 
        }else{
            return {}; 
        }
    }    
}

export default RulesEngine; 