import { Directive, HostListener } from "@angular/core";

@Directive({
    selector: "[sub-menu]",
    exportAs: 'subMenuDirective'
})
export class SubMenuDirective{
    constructor(){

    }
}