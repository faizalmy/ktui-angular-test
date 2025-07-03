import { Directive, effect, ElementRef, inject, input } from "@angular/core";
import { KTCollapse, KTCollapseConfigInterface } from "@keenthemes/ktui";

@Directive({
    selector: '[data-kt-collapse]',
    standalone: true,
})
export class KtCollapseDirective {
    // Inputs
    public config = input<KTCollapseConfigInterface | null>(null, { alias: 'kt-collapse-config' });

    // Publics
    public instance!: KTCollapse;

    // Injections
    private hostElement = inject(ElementRef<HTMLElement>);

    constructor() {
        effect(() => {
            const element = this.hostElement.nativeElement;
            const config = this.config();
            if (config) {
                this.instance = new KTCollapse(element, config);
            } else {
                this.instance = new KTCollapse(element);
            }
        });
    }
}