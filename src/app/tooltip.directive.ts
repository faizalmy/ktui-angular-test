import { Directive, effect, ElementRef, inject, input } from "@angular/core";
import { KTTooltip, KTTooltipConfigInterface } from "@keenthemes/ktui";

@Directive({
    selector: '[data-kt-tooltip]',
    standalone: true,
})
export class KtTooltipDirective {
    // Inputs
    public config = input<KTTooltipConfigInterface | null>(null, { alias: 'kt-tooltip-config' });

    // Publics
    public instance!: KTTooltip;

    // Injections
    private hostElement = inject(ElementRef<HTMLElement>);

    constructor() {
        effect(() => {
            const element = this.hostElement.nativeElement;
            this.instance = new KTTooltip(element)
        });
    }
}