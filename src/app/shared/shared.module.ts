import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MenuComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [MenuComponent, FooterComponent],
})
export class SharedModule {}
