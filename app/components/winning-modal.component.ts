import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {Modal, BS_MODAL_PROVIDERS, BSModalContext} from 'angular2-modal/plugins/bootstrap';
import {DialogRef, ModalComponent} from 'angular2-modal';
import {GameEngineService} from "../services/gaming-engine";

export class WinningWindowData extends BSModalContext {
    constructor(public num1: number, public num2: number) {
        super();
    }
}
/**
 * A Sample of how simple it is to create a new window, with its own injects.
 */
@Component({
    selector: 'modal-content',
    styles: [`
        .custom-modal-container {
            padding: 15px;
        }
        .custom-modal-header {
            background-color: #219161;
            color: #fff;
            -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            margin-top: -15px;
            margin-bottom: 40px;
        }
        .modal-dialog {
            width: 600px;
            margin: 30px auto;
        }
        .modal-content {
            background-color: transparent;
            box-shadow: none;
        }
    `],
    //TODO: [ngClass] here on purpose, no real use, just to show how to workaround ng2 issue #4330.
    // Remove when solved.
    /* tslint:disable */
    template: `
        <div class="modal-dialog modal-dialog-center">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" (click)="closeModal()">×</button>
                    <h4 id="headerBlock" class="modal-title">And the winner are:</h4>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div *ngFor="let user of gameEngineService.completedPlayers">
                            <i class="fa fa-4 {{user.displayImage}}"></i>
                            {{user.username}}
                            {{gameEngineService.rank[user.rank]}}
                        </div>
                    </div>   
                </div>
                <div class="modal-footer">
                    <button class="btn btn-success" (click)="closeModal()">Close</button>   
                </div>
            </div>
        </div>
        `
})
export class WinnerModal implements ModalComponent<WinningWindowData> {
    context: WinningWindowData;

    constructor(public dialog: DialogRef<WinningWindowData>, public gameEngineService: GameEngineService, public parentRouter:Router) {
        this.context = dialog.context;
    }

    closeModal() {
        this.gameEngineService.resetGame();
        this.dialog.close();
        this.parentRouter.navigateByUrl('/home');
    }

    beforeDismiss(): boolean {
        return true;
    }
}