import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../common-component/snack-bar/snack-bar.component';
@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(public snackBar:MatSnackBar) { }
  public openSnackbar(message:string,action:string,snackType:string){
    let style = {
      Success:'green-snackbar',
      Error:'red-snackbar',
      Info:'blue-snackbar',
      Warn:'grey-snackbar'
    }
    const _snackType:string = snackType !== undefined ? snackType : 'Success'
    this.snackBar.openFromComponent(SnackBarComponent,{
      duration:10000,
      horizontalPosition:'end',
      verticalPosition:'top',
      panelClass:style[_snackType as keyof typeof style],
      data:{message:message, snackType:_snackType}
    })
  }
}
