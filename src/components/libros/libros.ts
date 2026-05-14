import { Component, inject } from '@angular/core';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-libros',
  imports: [],
  templateUrl: './libros.html',
  styleUrl: './libros.scss',
})
export class Libros {
  private contentService = inject(ContentService);
  content = this.contentService.content;
}
