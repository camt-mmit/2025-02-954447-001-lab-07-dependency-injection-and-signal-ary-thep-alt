import { ChangeDetectionStrategy, Component, effect, inject, linkedSignal } from '@angular/core';
import { DynamicContact } from '../../components/dynamic-contact/dynamic-contact';
import { createContacts, toContacts } from '../../helpers';
import { ContactStorage } from '../../services/contact.storage';

@Component({
  selector: 'app-example-update-page',
  imports: [DynamicContact],
  templateUrl: './example-update-page.html',
  styleUrl: './example-update-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleUpdatePage {
  private readonly dataStorage = inject(ContactStorage);

  protected readonly data = linkedSignal(() => createContacts(this.dataStorage.get() ?? undefined));

  constructor() {
    effect(() => this.dataStorage.set(toContacts(this.data())));
  }
}
