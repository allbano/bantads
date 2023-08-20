import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NumericoDirective } from "./directives/numerico.directive";

@NgModule({
    imports:      [CommonModule],
    declarations: [NumericoDirective],
    exports:      [CommonModule, FormsModule, NumericoDirective ]
   })
   export class SharedModule { }