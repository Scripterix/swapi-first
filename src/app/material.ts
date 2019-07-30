import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
imports: [ MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatMenuModule, MatCardModule, MatDividerModule ],
exports: [ MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatMenuModule, MatCardModule, MatDividerModule  ],
})
export class MaterialModule {}
