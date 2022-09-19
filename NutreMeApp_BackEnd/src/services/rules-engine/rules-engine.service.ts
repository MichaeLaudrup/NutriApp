const {Engine} = require('json-rules-engine'); 
import { rules } from "./rules/feedingType-rules";
export class RulesEngine {
    engine = new Engine(); 
    constructor(){ 
        rules.forEach( rule => {
            this.engine.addRule(rule); 
        })
    }

    async probeFact( fact: any){
        let result = await this.engine.run(fact); 
        result.events.map( (x:any) => console.log(x))

    }
}

export default RulesEngine; 