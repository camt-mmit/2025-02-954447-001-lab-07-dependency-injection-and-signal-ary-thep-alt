import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { SectionStorage } from '../../services/section.storage';
import { DynamicSection } from '../../components/dynamic-section/dynamic-section';
import { createSection, toSections, fromSections } from '../../helpers';
import { Section, SectionItem } from '../../types';

@Component({
  selector: 'app-assignment-page',
  standalone: true,
  imports: [DynamicSection, DecimalPipe],
  templateUrl: './assignment-page.html',
  styleUrl: './assignment-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssignmentPage {
  private readonly storage = inject(SectionStorage);

  // โหลดข้อมูล number[][] มาแปลงเป็น Section[] เพื่อใช้งาน
  protected readonly sections = signal<Section[]>(toSections(this.storage.get()));

  constructor() {
    effect(() => {
      // แปลงกลับเป็น number[][] ก่อนบันทึกลง Storage
      const rawData = fromSections(this.sections());
      this.storage.set(rawData);
    });
  }

  protected addSection(): void {
    this.sections.update((sections) => [...sections, createSection()]);
  }

  protected removeSection(index: number): void {
    this.sections.update((sections) => sections.filter((_, i) => i !== index));
  }

  protected updateSectionItems(index: number, newItems: SectionItem[]): void {
    this.sections.update((sections) => {
      return sections.map((sec, i) => (i === index ? { ...sec, items: newItems } : sec));
    });
  }
}
