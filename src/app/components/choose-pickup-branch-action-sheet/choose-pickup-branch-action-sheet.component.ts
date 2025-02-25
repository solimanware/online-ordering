import { Component, Input, OnInit } from '@angular/core';
import { IonIcon, IonSearchbar } from '@ionic/angular/standalone';
import { Branch } from 'src/app/interfaces/metaData';
import { HomePageService } from 'src/app/services/home-page.service';

@Component({
  selector: 'app-choose-pickup-branch-action-sheet',
  templateUrl: './choose-pickup-branch-action-sheet.component.html',
  styleUrls: ['./choose-pickup-branch-action-sheet.component.scss'],
  standalone: true,
  imports: [IonIcon, IonSearchbar],
})
export class ChoosePickupBranchActionSheetComponent implements OnInit {
  @Input() branches: Branch[] = [];
  constructor(private homePageService: HomePageService) {}

  closeActionSheet() {
    console.log('close button clicked');
    this.homePageService.shouldShowPickupActionSheet$.next(false);
  }

  selectBranch(branch: Branch) {
    this.homePageService.nearestBranch$.next(branch);
    console.log(branch);

    this.closeActionSheet();
  }

  ngOnInit() {}
}
