import { Component, OnInit } from '@angular/core';
import { ApiService } from './app.service';
import { LegalContentItem } from './legal-content';
import { map } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  legalContent: any;
  legalContentItems: LegalContentItem[];
  legalContentPerProgram = new Map<string, LegalContentItem>();
  programs:any;
  selectedProgramName: string;
  selectedProgram: LegalContentItem;

  constructor(private apiService: ApiService) {
    this.programs = [];
    this.programs[0] = 'GreenSky Patient Solutions';    
    this.programs[1] = 'Retail Furniture';
    this.programs[2] = 'GreenSky Consumer Projects';    
    // this.programs[3] = 'GreenSky eCommerce';

    console.log(this.programs);
  }

  ngOnInit() {
    this.loadLegalContent();
  }

  loadLegalContent() {
    this.apiService.getLegalContent()
    .pipe(map(val => {
      if(Array.isArray(val['content'])) {
        val['content'].forEach(element => {
          const pgms = element.program.split(',');
          pgms.forEach(pgm => {
            if(!this.legalContentPerProgram.has(pgm)) {
              this.legalContentPerProgram.set(pgm, new LegalContentItem());
            }
            this.legalContentPerProgram.get(pgm)[element.type] = element.body && element.body.trim();
          });
        });

        console.log(this.legalContentPerProgram);
      }
    }))
    .subscribe();
  }

  programChanged(program): void {
    console.log(`Selected Program ${program}`);
    this.selectedProgram = this.legalContentPerProgram.get(program);
    console.log(this.selectedProgram);
  }
}
