import { Directive, effect, ElementRef, inject, input } from "@angular/core";
import { KTAccordion, KTAccordionConfigInterface } from "@keenthemes/ktui";

@Directive({
    selector: '[data-kt-accordion]',
    standalone: true,
})
export class KtAccordionDirective {
    // Inputs
    public config = input<KTAccordionConfigInterface | null>(null, { alias: 'kt-accordion-config' });

    // Publics
    public instance!: KTAccordion;

    // Injections
    private hostElement = inject(ElementRef<HTMLElement>);

    constructor() {
        effect(() => {
            const element = this.hostElement.nativeElement;
            const config = this.config();
            if (config) {
                this.instance = new KTAccordion(element, config);
            } else {
                this.instance = new KTAccordion(element);
            }
        });
    }
}