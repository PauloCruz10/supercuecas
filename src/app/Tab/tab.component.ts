import { 
    Component, 
    OnInit , 
    NgModule,
    ComponentFactoryResolver,
    Injectable,
    Inject,
    ViewContainerRef,
    ViewChild
 } from '@angular/core';

import 'prismjs/prism';
import 'prismjs/components/prism-typescript';
import { PrismComponent } from 'angular-prism';
import { AppComponent } from '../app.component';

@NgModule({
    imports: [],
    exports: [TabComponent],
    declarations: [
        TabComponent,
    ],
    entryComponents:[PrismComponent,AppComponent],
    providers: [],
})

@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.scss']
  })
  export class TabComponent implements OnInit{

    selectedUrl :string;
    selectedFile :string;
    step1Updated = false;
    factoryResolver = null;
      urls =[
        { id: 1, url: 'http://www.abola.pt' },
        { id: 2, url: 'http://www.record.pt' },
        { id: 3, url: 'http://www.uc.pt' },
       
      ];

      files =[
        { id: 1, name:"index.js" ,
        file: `
        function understands_video() {
            return !!document.createElement(‘video’).canPlayType; // boolean
            }
            
            if ( !understands_video() ) {
            // Must be older browser or IE.
            // Maybe do something like hide custom
            // HTML5 controls. Or whatever…
            videoControls.style.display = ‘none’;
            }
            function understands_video() {
                return !!document.createElement(‘video’).canPlayType; // boolean
                }
                
                if ( !understands_video() ) {
                // Must be older browser or IE.
                // Maybe do something like hide custom
                // HTML5 controls. Or whatever…
                videoControls.style.display = ‘none’;
                }
                function understands_video() {
                    return !!document.createElement(‘video’).canPlayType; // boolean
                    }
                    
                    if ( !understands_video() ) {
                    // Must be older browser or IE.
                    // Maybe do something like hide custom
                    // HTML5 controls. Or whatever…
                    videoControls.style.display = ‘none’;
                    }
                    function understands_video() {
                        return !!document.createElement(‘video’).canPlayType; // boolean
                        }
                        
                        if ( !understands_video() ) {
                        // Must be older browser or IE.
                        // Maybe do something like hide custom
                        // HTML5 controls. Or whatever…
                        videoControls.style.display = ‘none’;
                        }
        `},
    {
        id: 2, name:"konami.js", file:`console.log("olho konami");`
    }];

    @ViewChild('messagecontainer', { read: ViewContainerRef }) entry: ViewContainerRef;

    constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
        this.factoryResolver = factoryResolver;
      }

      ngOnInit(){
          console.log("Estou a iniciar");
      }

      onSelect(url: string): void {
        this.selectedUrl = url;
        console.log(url);
      }

      onSelectFile(file: string): void {
        this.selectedFile = file;
        console.log(file);
        const crf = this.factoryResolver.resolveComponentFactory(
            PrismComponent 
        );
        //this.entry.clear();
        //const cf = this.entry.createComponent(crf);
        //(<PrismComponent>cf.instance).code = "var r = 2;" ;
      }
  }