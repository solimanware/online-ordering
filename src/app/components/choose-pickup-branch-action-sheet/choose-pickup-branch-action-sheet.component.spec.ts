import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChoosePickupBranchActionSheetComponent } from './choose-pickup-branch-action-sheet.component';

describe('ChoosePickupBranchActionSheetComponent', () => {
  let component: ChoosePickupBranchActionSheetComponent;
  let fixture: ComponentFixture<ChoosePickupBranchActionSheetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosePickupBranchActionSheetComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChoosePickupBranchActionSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
