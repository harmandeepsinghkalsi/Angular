import { Directive ,OnInit,OnDestroy ,Input,Output,EventEmitter,HostListener,ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  exportAs : 'appHighlight'
})
export class HighlightDirective implements OnDestroy,OnInit{

  @Input()
  color:string;

  constructor(private hostElement : ElementRef , private renderer : Renderer2) { //Renderer will provide the apis

    console.log("Highlight directive created");
    
   }

   ngOnInit(){
      console.log("highlight init");
      console.log(this.color);
   }

   ngOnDestroy(){
    console.log("highlight on destroy");
   }

   @HostListener('click')
   onClick(){
    console.log("Directive clicked");
   }

   @HostListener('mouseenter')
   onEnter(){
    console.log("we entered");
    this.renderer
        .setStyle(this.hostElement.nativeElement,'background',this.color);
   }

   @HostListener('mouseleave')
   onLeave(){
    console.log("we left");

    this.renderer
        .removeStyle(this.hostElement.nativeElement,'background');
   }
   
   setColor(color:string){
     console.log('set Color' , color);
     this.color=color;
   }
   

}
