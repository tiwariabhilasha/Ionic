import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter, TemplateRef } from '@angular/core';
import { Targets } from '../../../targets';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-target-details',
  templateUrl: './target-details.component.html',
  styleUrls: ['./target-details.component.scss']
})
export class TargetDetailsComponent implements OnInit, OnChanges {

  @Input() details;
  @Input() selectedCard;
  @Output() updateList: EventEmitter<any> = new EventEmitter();
  @Output() updateId: EventEmitter<any> = new EventEmitter();
  selectCard;
  detail;
  public selectedTarget: Targets;
  statuses: Array<object>;
  public message: string = '';
  public showMsg: boolean = false;
  public action: string = '';

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
    this.statuses = [{
      id: "pending", name: "pending"
    },
    { id: "approved", name: "Approved" },
    { id: "declined", name: "declined" },
    { id: "researching", name: "researching" },
    ]
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



  onSubmit(value) {
    let self = this;
    this.showMsg = true;
    this.message = "Changes have been saved!";
    this.action = "save";
    this.selectedTarget[0].companyInfo = {
      "companyName": value.companyName.value,
      "description": value.description.value
    }
    this.selectedTarget[0].keyContacts = value.contacts.value;
    this.selectedTarget[0].performance = value.performance.value;
    this.selectedTarget[0].status = value.status.value;

    setTimeout(function () { self.clearMessage() }, 3000);
  }

  delete() {
    let self = this;
    this.message = "Selected target from the list has been deleted, select another target to display it's details.";
    this.showMsg = true;
    this.action = "delete"
    this.detail.targets = this.details.targets.filter(detail => detail.id !== this.selectedTarget[0].id);
    this.selectedTarget[0] = this.details.targets[0];
    this.targetForm.setValue({
      companyName: this.selectedTarget[0].companyInfo.companyName,
      description: this.selectedTarget[0].companyInfo.description,
      status: this.selectedTarget[0].status,
      contacts: this.selectedTarget[0].keyContacts,
      performance: this.selectedTarget[0].performance
    });
    this.updateId.emit(this.selectedTarget[0].id);
    setTimeout(function () { self.clearMessage() }, 4000);
  }

  save_to_local_json() {
    var items_json = JSON.stringify(this.details.targets);
    localStorage.setItem('targets', items_json);
    this.read_from_local_json();
  }

  read_from_local_json() {
    var items_json = localStorage.getItem('targets');
    this.details.targets = JSON.parse(items_json);

  }

  creatNew() {
    this.targetForm.reset();
    this.updateList.emit({ id: this.details.targets.length + 1, status: "new", companyInfo: { companyName: "", description: "" }, keyContacts: "", performance: "" })
  }

  clearMessage() {
    this.showMsg = false;
  }

  confirm(): void {
    this.delete();
    this.modalRef.hide();
  }
  decline(): void {
    this.modalRef.hide();
  }
}