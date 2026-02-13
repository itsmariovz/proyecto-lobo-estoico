import { Routes } from '@angular/router';
import { Inicio } from '../layout/inicio/inicio';
import { Bio } from '../components/bio/bio';
import { Libros } from '../components/libros/libros';
import { Productos } from '../components/productos/productos';

export const routes: Routes = [
    {path: "", component: Inicio  },
    {path: "inicio", component: Inicio  },
    {path: "sobre-mi", component: Bio},
    {path: "libros", component: Libros},
    {path: "productos", component: Productos},
    {path: "**", redirectTo: "inicio" }
];
