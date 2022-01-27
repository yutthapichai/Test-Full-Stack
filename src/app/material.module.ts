import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
    exports: [
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule
    ]
})
export class MaterialModule { }