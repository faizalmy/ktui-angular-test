import { Directive, effect, ElementRef, inject, input } from "@angular/core";
import { KTDismiss, KTDismissConfigInterface } from "@keenthemes/ktui";

@Directive({
    selector: '[data-kt-dismiss]',
    standalone: true,
})
export class KtDismissDirective {
    // Inputs
    public config = input<KTDismissConfigInterface | null>(null, { alias: 'kt-dismiss-config' });

    // Publics
    public instance!: KTDismiss;

    // Injections
    private hostElement = inject(ElementRef<HTMLElement>);

    constructor() {
        effect(() => {
            const element = this.hostElement.nativeElement;
            const config = this.config();
            if (config) {
                this.instance = new KTDismiss(element, config);
            } else {
                this.instance = new KTDismiss(element);
            }
        });
    }
}