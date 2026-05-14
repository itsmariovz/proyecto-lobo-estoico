import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-inicio',
  imports: [RouterLink],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss',
})
export class Inicio {
  private contentService = inject(ContentService);

  content = this.contentService.content;

  heroSubtitle = computed(() =>
    this.contentService.content().heroSubtitle.replace(/\n/g, '<br>')
  );
}
