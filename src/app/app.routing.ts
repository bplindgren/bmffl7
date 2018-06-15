import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'owners', loadChildren: './owner/owner.module#OwnerModule' }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
