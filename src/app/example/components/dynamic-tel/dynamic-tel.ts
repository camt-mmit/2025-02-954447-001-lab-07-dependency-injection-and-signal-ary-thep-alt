import { DecimalPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  booleanAttribute,
  computed,
  input,
  model,
  numberAttribute,
  output,
} from '@angular/core';
import { createContact, createTel } from '../../helpers';

@Component({
  selector: 'app-dynamic-tel',
  imports: [DecimalPipe],
  templateUrl: './dynamic-tel.html',
  styleUrl: './dynamic-tel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    role: 'section',
  },
})
export class DynamicTel {
  readonly number = input(NaN, { transform: numberAttribute });
  readonly contact = model(createContact());
  readonly removable = input(true, { transform: booleanAttribute });

  readonly remove = output<void>();

  protected numberIsNaN = computed(() => Number.isNaN(this.number()));

  protected changeName(value: string): void {
    this.contact.update((contact) => {
      return {
        ...contact,
        name: value,
      };
    });
  }

  protected addTel(): void {
    this.contact.update((contact) => {
      const { tels, ...rest } = contact;

      return {
        ...rest,
        tels: [...tels, createTel()],
      };
    });
  }

  protected changeTel(index: number, value: string): void {
    this.contact.update((contact) => {
      const { tels, ...rest } = contact;

      return {
        ...rest,
        tels: tels.map((tel, i) => {
          if (i === index) {
            tel.value = value;
          }

          return tel;
        }),
      };
    });
  }

  protected removeTel(index: number): void {
    this.contact.update((contact) => {
      const { tels, ...rest } = contact;

      return {
        ...rest,
        tels: tels.filter((_value, i) => i !== index),
      };
    });
  }
}
