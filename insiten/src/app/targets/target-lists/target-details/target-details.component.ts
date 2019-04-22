import { Component, OnInit, Input, SimpleChanges, OnChanges, SimpleChange } from '@angular/core';
import { Targets } from '../../../targets';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-target-details',
  templateUrl: './target-details.component.html',
  styleUrls: ['./target-details.component.scss']
})
export class TargetDetailsComponent implements OnInit, OnChanges {

  @Input() details;
  @Input() selectedCard;
  selectCard;
  detail;
  public selectedTarget: Targets;
  constructor() { }

  ngOnInit() {
    console.log("testing")
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectedCard !== undefined && changes.selectedCard.currentValue !== undefined) {
      this.selectCard = changes.selectedCard.currentValue
    }
    if (changes.details !== undefined && changes.details.currentValue !== undefined) {
      this.detail = changes.details.currentValue;
    }
    if (this.detail !== undefined) {
      this.selectedTarget = this.detail.targets.filter(
        target => target.id === this.selectCard);
    }

    if (this.selectedTarget !== undefined) {
      this.targetForm.setValue({
        companyName: this.selectedTarget[0].companyInfo.companyName,
        description: this.selectedTarget[0].companyInfo.description,
        status: this.selectedTarget[0].status,
        contacts: this.selectedTarget[0].keyContacts,
        performance: this.selectedTarget[0].performance
      });
    }
  }

  targetForm = new FormGroup({
    companyName: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    contacts: new FormControl('', Validators.required),
    performance: new FormControl('', Validators.required)
  });

  

  onSubmit(value){
    
  }




}
