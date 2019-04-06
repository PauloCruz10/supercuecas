import { 
    Component, 
    OnInit , 
    NgModule,
    
 } from '@angular/core';
import { from } from 'rxjs';
declare var Prism;
@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.scss']
  })  
  export class TabComponent implements OnInit {

    selectedUrl :string;
    selectedFile :string;
    step1Updated = false;
    factoryResolver = null;
    highlighted: boolean = false;
    myCode:string;

    constructor(){
        
    }
      urls =[
        { id: 1, url: 'http://www.abola.pt' },
        { id: 2, url: 'http://www.record.pt' },
        { id: 3, url: 'http://www.uc.pt' },
       
      ];

      files =[
        { id: 1, name:"index.js" ,
        file: `
        function(){ 
            console.log("yolo"); 
        }
        `},
    {
        id: 2, name:"konami.js", file:"var data = 1\n\t return 1;"
    }];

    ngOnInit(){
         console.log("Estou a iniciar");
    }

    onSelect(url: string): void {
        this.selectedUrl = url;
        console.log(url);
    }

    onSelectFile(file: string): void {
        var nw = Prism.plugins.NormalizeWhitespace;
        this.selectedFile = file;
        console.log(file["file"]);
        this.myCode = Prism.highlight(file["file"],Prism.languages.javascript,'javascript');

    }
  }