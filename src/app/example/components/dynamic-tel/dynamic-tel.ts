import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  input,
  model,
  output,
} from '@angular/core';
import { createContact, createTel } from '../../helpers';

@Component({
  selector: 'app-dynamic-tel',
  imports: [],
  templateUrl: './dynamic-tel.html',
  styleUrl: './dynamic-tel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicTel {
  readonly number = input<number | null>(null);
  readonly contact = model(createContact());
  readonly removable = input(false, { transform: booleanAttribute });

  readonly remove = output<void>();

  protected changeName(name: string): void {
    this.contact.update((contact) => {
      return {
        ...contact,
        name,
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

  protected removeTel(index: number): void {
    this.contact.update((contact) => {
      const { tels, ...rest } = contact;

      return {
        ...rest,
        tels: tels.filter((_value, i) => i !== index),
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
}
