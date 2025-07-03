import { Directive, effect, ElementRef, inject, input } from "@angular/core";
import { KTDropdown, KTDropdownConfigInterface } from "@keenthemes/ktui";

@Directive({
    selector: '[data-kt-dropdown]',
    standalone: true,
})
export class KtDropdownDirective {
    // Inputs
    public config = input<KTDropdownConfigInterface | null>(null, { alias: 'kt-dropdown-config' });

    // Publics
    public instance!: KTDropdown;

    // Injections
    private hostElement = inject(ElementRef<HTMLElement>);

    constructor() {
        effect(() => {
            const element = this.hostElement.nativeElement;
            const config = this.config();
            if (config) {
                this.instance = new KTDropdown(element, config);
            } else {
                this.instance = new KTDropdown(element);
            }
        });
    }
}