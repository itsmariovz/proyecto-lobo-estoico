import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContentService, SiteContent } from '../../services/content.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-panel',
  imports: [FormsModule],
  templateUrl: './admin-panel.html',
  styleUrl: './admin-panel.scss',
})
export class AdminPanel {
  private contentService = inject(ContentService);
  protected adminService = inject(AdminService);

  password = '';
  loginError = false;
  activeTab = 'libros';
  newPassword = '';
  confirmPassword = '';
  passwordMsg = '';
  saved = false;

  draft: SiteContent = { ...this.contentService.content() };

  login() {
    if (this.adminService.login(this.password)) {
      this.loginError = false;
      this.draft = { ...this.contentService.content() };
    } else {
      this.loginError = true;
    }
    this.password = '';
  }

  onFieldChange() {
    this.contentService.update({ ...this.draft });
    this.saved = true;
    setTimeout(() => (this.saved = false), 2000);
  }

  changePassword() {
    if (!this.newPassword || this.newPassword !== this.confirmPassword) {
      this.passwordMsg = '⚠ Las contraseñas no coinciden.';
      return;
    }
    this.adminService.changePassword(this.newPassword);
    this.newPassword = '';
    this.confirmPassword = '';
    this.passwordMsg = '✓ Contraseña actualizada.';
    setTimeout(() => (this.passwordMsg = ''), 3000);
  }

  restore() {
    if (!confirm('¿Restaurar todos los textos a los valores originales?')) return;
    this.contentService.reset();
    this.draft = { ...this.contentService.content() };
  }
}
