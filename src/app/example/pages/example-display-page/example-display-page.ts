import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { DisplayContact } from '../../components/display-contact/display-contact';
import { ContactStorage } from '../../services/contact.storage';

@Component({
  selector: 'app-example-display-page',
  imports: [DisplayContact],
  templateUrl: './example-display-page.html',
  styleUrl: './example-display-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleDisplayPage {
  private readonly dataStorage = inject(ContactStorage);

  protected readonly data = signal(this.dataStorage.get() ?? null);
}
