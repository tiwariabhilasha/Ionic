import { Component, OnInit, ViewChild } from '@angular/core';
import { Targets } from '../../targets';
import { TargetsService } from '../../targets.service';
import {Router} from '@angular/router';
import 'simplebar';


@Component({
  selector: 'app-target-lists',
  templateUrl: './target-lists.component.html',
  styleUrls: ['./target-lists.component.scss']
})
export class TargetListsComponent implements OnInit {

  constructor(private targetService: TargetsService, private router: Router) { }

  public targetList: Targets;
  public details: Targets;
  private selectedCard: Number = 1;

  ngOnInit() {
    this.targetService.getTargetList().subscribe(res => {
      this.targetList = res;
      this.details = res;
    })
  }

  getDetails(id: Number){
    this.selectedCard = id;
  }

  updateList(updatedTarget: Targets){
    this.targetList.targets.unshift(updatedTarget);
    this.selectedCard = updatedTarget.id;
  }

  updateId(updateId: number){
    this.selectedCard = updateId;
  }

}
