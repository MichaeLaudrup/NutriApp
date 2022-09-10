const {Engine} = require('json-rules-engine'); 
import { rules } from "./rules/basic-rules";
export class RulesEngine {
    engine = new Engine(); 
    constructor(){ 
        rules.forEach( rule => {
            this.engine.addRule(rule); 
        })
    }

    probeFact( fact: any){
        this.engine.run(fact).then( (event:any) => {
            console.log(event)
        })
    }
}

export default RulesEngine; 