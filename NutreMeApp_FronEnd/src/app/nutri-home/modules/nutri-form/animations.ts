import { query, transition, trigger, style, animate, group} from "@angular/animations";

export const  sliderAnimations = [trigger('carrouselAnimation', [
    transition('none => select-objective , none => fisiologic-data ,select-objective => fisiologic-data', [
        group([
            query(':enter', [
                style({
                    left: '150%',
                    opacity: 0,
                    transform: 'scale(0) translate(-50%, -50%)'
                }),
                animate('1s ease-in-out', style({
                    opacity: 1,
                    left: '50%',
                    transform: 'scale(1) translate(-50%, -50%)'
                }))
            ], { optional:true}),
            query(':leave', [
                style({
                    left: '50%',
                    opacity: 1,
                    transform: 'scale(1) translate(-50%, -50%)'
                }),
                animate('1s ease-in-out', style({
                    opacity: 0,
                    left: '-150%',
                    transform: 'scale(0) translate(-50%, -50%)'
                }))

            ], { optional:true})
        ])
        
    ]),
    transition('fisiologic-data => select-objective', [
        group([
            query(':enter', [
                style({
                    left: '-150%',
                    opacity: 0,
                    transform: 'scale(0) translate(-50%, -50%)'
                }),
                animate('1s ease-in-out', style({
                    opacity: 1,
                    left: '50%',
                    transform: 'scale(1) translate(-50%, -50%)'
                }))
            ], { optional:true}),
            query(':leave', [
                style({
                    left: '50%',
                    opacity: 1,
                    transform: 'scale(1) translate(-50%, -50%)'
                }),
                animate('1s ease-in-out', style({
                    opacity: 0,
                    left: '150%',
                    transform: 'scale(0) translate(-50%, -50%)'
                }))

            ], { optional:true})
        ])
        
    ]),


]),]