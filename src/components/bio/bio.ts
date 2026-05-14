import { Component, inject } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-bio',
  imports: [],
  templateUrl: './bio.html',
  styleUrl: './bio.scss',
})
export class Bio {
  private contentService = inject(ContentService);
  private adminService = inject(AdminService);

  content = this.contentService.content;

  private clicks = 0;
  private timer: ReturnType<typeof setTimeout> | null = null;

  onPhotoClick() {
    this.clicks++;
    if (this.timer) clearTimeout(this.timer);

    if (this.clicks >= 3) {
      this.clicks = 0;
      this.adminService.open();
      return;
    }

    this.timer = setTimeout(() => { this.clicks = 0; }, 800);
  }
}
