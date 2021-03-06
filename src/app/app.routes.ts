import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";
import { ListComponent } from "./components/list/list.component";
import { CreateComponent } from "./components/create/create.component";
import { EditComponent } from "./components/edit/edit.component";

const appRoutes:Routes = [
    { path: '', component: ListComponent },
    { path: 'create', component: CreateComponent },
    { path: 'edit/:id', component: EditComponent }
];

export const AppRoutes:ModuleWithProviders = RouterModule.forRoot(appRoutes);
