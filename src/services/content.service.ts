import { Injectable, signal } from '@angular/core';

export interface SiteContent {
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  featuredBookTitle: string;
  featuredBookFootnote: string;
  secondBookTitle: string;
  secondBookDescription: string;
  bioName: string;
  bioParagraph1: string;
  bioParagraph2: string;
  libro1Title: string;
  libro2Title: string;
  libro2Description: string;
  resilienciaUrl: string;
  primerCaminoUrl: string;
  instagramUrl: string;
}

export const DEFAULT_CONTENT: SiteContent = {
  heroEyebrow: 'Filosofía de acero',
  heroTitle: 'Lobo Estoico',
  heroSubtitle: 'No es autoayuda blanda.\nEs un recordatorio crudo de que la vida no espera a nadie.\nCada frase es un golpe directo para despertar tu fuerza, tu carácter y tu disciplina.',
  featuredBookTitle: 'Resiliencia: El arte de luchar en silencio',
  featuredBookFootnote: 'Resiliencia no promete cambiar tu vida. Te enseña a sostenerla, incluso cuando pesa.',
  secondBookTitle: 'El Primer Camino',
  secondBookDescription: 'Prepárate para un viaje transformador que te llevará desde la desesperación hasta el empoderamiento total. Si estás listo para dejar de mendigar aprobación y empezar a vivir en tus propios términos, este libro será tu guía hacia una vida de autenticidad, fuerza y propósito inquebrantable.',
  bioName: 'Daniel',
  bioParagraph1: 'Mi nombre es Daniel. Soy creador de Lobo Estoico, una comunidad que inspira a miles en redes sociales con mensajes de resiliencia, disciplina y filosofía práctica.',
  bioParagraph2: 'Mi voz no nace de la teoría, sino de la experiencia: de caer, levantarme y entender que la vida respeta a quienes no se rinden.',
  libro1Title: 'Resiliencia: El arte de luchar en silencio',
  libro2Title: 'El Primer Camino',
  libro2Description: 'Prepárate para un viaje transformador que te llevará desde la desesperación hasta el empoderamiento total. Si estás listo para dejar de mendigar aprobación y empezar a vivir en tus propios términos, este libro será tu guía hacia una vida de autenticidad, fuerza y propósito inquebrantable.',
  resilienciaUrl: 'https://www.amazon.com/dp/B0FHLQGXJL',
  primerCaminoUrl: 'https://www.amazon.com/dp/B0FHLQGXJL',
  instagramUrl: 'https://www.instagram.com/lobo_estoico_/',
};

@Injectable({ providedIn: 'root' })
export class ContentService {
  private readonly STORAGE_KEY = 'le-content';
  private _content = signal<SiteContent>(this.load());
  readonly content = this._content.asReadonly();

  private load(): SiteContent {
    try {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      return saved ? { ...DEFAULT_CONTENT, ...JSON.parse(saved) } : { ...DEFAULT_CONTENT };
    } catch {
      return { ...DEFAULT_CONTENT };
    }
  }

  update(patch: Partial<SiteContent>): void {
    this._content.update(c => ({ ...c, ...patch }));
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this._content()));
  }

  reset(): void {
    this._content.set({ ...DEFAULT_CONTENT });
    localStorage.removeItem(this.STORAGE_KEY);
  }
}
