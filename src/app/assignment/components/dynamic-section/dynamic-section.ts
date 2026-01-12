import { ChangeDetectionStrategy, Component, computed, input, model, output } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { DynamicInput } from '../dynamic-input/dynamic-input';
import { createItem } from '../../helpers';
import { SectionItem } from '../../types';

@Component({
  selector: 'app-dynamic-section',
  standalone: true,
  imports: [DynamicInput, DecimalPipe],
  templateUrl: './dynamic-section.html',
  styleUrl: './dynamic-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicSection {
  readonly index = input.required<number>();

  // ใช้ Model เป็น SectionItem[]
  readonly items = model.required<SectionItem[]>();
  readonly removable = input(true);
  readonly remove = output<void>();

  // Hint: You can use computed() to compute result.
  protected readonly result = computed(() => {
    return this.items().reduce((sum, item) => sum + item.value, 0);
  });

  protected addItem(): void {
    this.items.update((items) => [...items, createItem()]);
  }

  protected removeItem(index: number): void {
    this.items.update((items) => items.filter((_, i) => i !== index));
  }

  protected updateItemValue(index: number, newValue: number): void {
    this.items.update((items) => {
      // Immutable update: สร้าง object ใหม่เฉพาะตัวที่เปลี่ยน
      return items.map((item, i) => (i === index ? { ...item, value: newValue } : item));
    });
  }
}
