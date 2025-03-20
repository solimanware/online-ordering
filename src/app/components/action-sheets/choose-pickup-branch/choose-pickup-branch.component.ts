import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Branch } from 'src/app/interfaces/metaData';
import { AppService } from 'src/app/services/app.service';
import { HomePageService } from 'src/app/services/home-page.service';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-choose-pickup-branch',
  templateUrl: './choose-pickup-branch.component.html',
  styleUrls: ['./choose-pickup-branch.component.scss'],
  standalone: true,
})
export class ChoosePickupBranchComponent implements OnInit {
  @Input() branches: Branch[] = [];
  restaurantName$ = this.appService.restaurantName$;

  constructor(
    private homePageService: HomePageService,
    private router: Router,
    private appService: AppService,
    private logger: LoggerService
  ) {}

  closeActionSheet() {
    this.logger.debug('ChoosePickupBranchComponent', 'Closing action sheet');
    this.homePageService.shouldShowPickupActionSheet$.next(false);
  }

  selectBranch(branch: Branch) {
    this.logger.info('ChoosePickupBranchComponent', 'Branch selected', {
      branchId: branch.branchId,
      branchName: branch.branchName,
    });

    // Set the selected branch in the service
    this.homePageService.nearestBranch$.next(branch);

    // Close the action sheet
    this.closeActionSheet();

    // Navigate to the item detail page if there's a selected item
    const selectedItem = this.homePageService.selectedItem$.getValue();
    if (selectedItem) {
      this.logger.debug(
        'ChoosePickupBranchComponent',
        'Navigating to item detail with selected item'
      );
      this.router.navigate(['/', this.restaurantName$.value, 'item-detail']);
    } else {
      this.logger.debug(
        'ChoosePickupBranchComponent',
        'No item selected, staying on home page'
      );
    }
  }

  ngOnInit() {
    this.logger.debug('ChoosePickupBranchComponent', 'Component initialized', {
      branchesCount: this.branches.length,
    });
  }
}
