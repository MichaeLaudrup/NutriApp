import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { sharedFacadeService } from '@shared/ngrx-shared';
import { Subject } from 'rxjs';
import { StoreRouterAnimation } from '../animations';
import { StoreRoomService } from '../services/store-room.service';


@Component({
  selector: 'app-store-layout',
  templateUrl: './store-layout.component.html',
  styleUrls: ['./store-layout.component.scss'],
  /* animations: [ StoreRouterAnimation] */
})
export class StoreLayoutComponent implements OnInit, OnDestroy {
  
  private destroySuscriptions$: Subject<any> = new Subject()
  private editClickedPreviously = false;
  constructor(private storeRoomService: StoreRoomService) { }
  
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
      this.destroySuscriptions$.next({})
      this.destroySuscriptions$.unsubscribe()
  }

  createClicked() {
    this.storeRoomService.setClickedCreate(true); 
  }

  editClicked() {
    this.editClickedPreviously = !this.editClickedPreviously; 
    this.storeRoomService.setClickedEditmode(this.editClickedPreviously); 
  }
}
