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

  // แก้ไขตรงนี้: ตรวจสอบว่าถ้าโหลดมาแล้วว่าง (length == 0) ให้ใส่ [createSection()] เป็นค่าเริ่มต้น
  protected readonly sections = signal<Section[]>(
    (() => {
      const loaded = toSections(this.storage.get());
      return loaded.length > 0 ? loaded : [createSection()];
    })(),
  );

  constructor() {
    effect(() => {
      const rawData = fromSections(this.sections());
      this.storage.set(rawData);
    });
  }

  protected addSection(): void {
    // เมื่อกดปุ่มนี้ มันจะไปเรียก createSection() ใน helpers.ts
    // ซึ่งเราแก้ให้มันมี input ติดมาด้วยแล้ว 1 อัน
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
