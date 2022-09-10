export class FisiologicData {
    constructor(public altura: number,
                public peso: number,
                public edad: number,
                public genero: string, 
                public nivel_actividad: number,
                public mba?: number,
                public mbaWithActivity?:number,
                public imc?: number,
                public mbaWithActivityAndObjetive?: number,
                public diaryWater?: number,
                public diaryCarbohydrates?: number,
                public diaryProtein?: number,
                public diaryFats?:number ){}
}