import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, numberAttribute } from '@angular/core';
import { Contact } from '../../types';

@Component({
  selector: 'app-display-tel',
  imports: [DecimalPipe],
  templateUrl: './display-tel.html',
  styleUrl: './display-tel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    role: 'section',
  },
})
export class DisplayTel {
  readonly contact = input.required<Contact>();

  readonly number = input(NaN, { transform: numberAttribute });
}
