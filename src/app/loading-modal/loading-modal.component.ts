import { Component, OnInit } from '@angular/core';
import { MzBaseModal, MzModalComponent } from 'ng2-materialize';

@Component({
  selector: 'app-loading-modal',
  templateUrl: './loading-modal.component.html',
  styleUrls: ['./loading-modal.component.css']
})
export class LoadingModalComponent extends MzBaseModal  {
  public modalOptions: Materialize.ModalOptions = {
    dismissible: false,
    opacity: 0.9,
    endingTop: '40%'
  };

}
