import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from './landingComponent/landing.component';
import { QuoteBlockComponent } from './quoteblock/quoteblock.component';
import { TodosComponent } from './todoComponent/todos.component';

const routes : Routes = [
	{ path: 'landing', component: LandingPageComponent },
	{ path: '', redirectTo: 'landing', pathMatch: 'full'}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes), CommonModule ],
	declarations: [ LandingPageComponent, QuoteBlockComponent, TodosComponent ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {

}