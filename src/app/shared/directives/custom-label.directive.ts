import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

  private htmlElement?: ElementRef<HTMLElement>
  private _color: string = 'red';
  private _errors?: ValidationErrors|null;

  @Input() set color(value: string) { 
    this._color = value;
    this.setStyle();
   }
  @Input() set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    this.setErrorMessage();
 /*    console.log(value); */

   }

  constructor(
    private el: ElementRef<HTMLElement>
  ) { 
    this.htmlElement = el;
    /* console.log(el); */
   /*  this.htmlElement.nativeElement.innerHTML="<ul><li>hola</li></u>" */
  }
  ngOnInit(): void {
    /*  console.log("Directiva - Oninit") */
    this.setStyle();
   
  }

  setStyle(): void {
    if (!this.htmlElement) return;
    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setErrorMessage(): void {
    if (!this.htmlElement) return;
    if (!this._errors) {
      this.htmlElement.nativeElement.innerText = 'no hay errores';
      return;
    }
    const errors = Object.keys(this._errors);

    if (errors.includes('required')) { 
      this.htmlElement.nativeElement.innerText = 'este campo es requerido'
      return;
    }
    if (errors.includes('minlength')) { 
      const min = this._errors['minlength']['requiredLength'];
      const current = this._errors['minlength']['actualLength'];

      this.htmlElement.nativeElement.innerText =`Mínimo ${current}/${ min } caracteres.`
      return;
    }
     if (errors.includes('email')) { 
      this.htmlElement.nativeElement.innerText ='ingerese un correo correcto'
      return;
    }
    
    

   }


}
