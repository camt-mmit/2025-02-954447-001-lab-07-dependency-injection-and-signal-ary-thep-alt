import { ChangeDetectionStrategy, Component, input, model, output } from '@angular/core';

@Component({
  selector: 'app-dynamic-input',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-input.html',
  styleUrl: './dynamic-input.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicInput {
  readonly index = input.required<number>();
  readonly value = model.required<number>();
  readonly removable = input(true);
  readonly remove = output<void>();

  protected onInput(value: string): void {
    const num = parseFloat(value);
    this.value.set(isNaN(num) ? 0 : num);
  }
}
