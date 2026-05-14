import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AdminService {
  private readonly PW_KEY = 'le-admin-pw';
  private readonly DEFAULT_PW = 'lobo2026';

  private _isOpen = signal(false);
  private _authed = signal(false);

  readonly isOpen = this._isOpen.asReadonly();
  readonly isAuthenticated = this._authed.asReadonly();

  private getPassword(): string {
    return localStorage.getItem(this.PW_KEY) ?? this.DEFAULT_PW;
  }

  login(pw: string): boolean {
    const ok = pw === this.getPassword();
    if (ok) this._authed.set(true);
    return ok;
  }

  logout(): void {
    this._authed.set(false);
    this._isOpen.set(false);
  }

  open(): void { this._isOpen.set(true); }
  close(): void { this._isOpen.set(false); }

  changePassword(newPw: string): void {
    localStorage.setItem(this.PW_KEY, newPw);
  }
}
