import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { createContact, createContacts } from '../../helpers';
import { ContactModel } from '../../types';
import { DynamicTel } from '../dynamic-tel/dynamic-tel';

@Component({
  selector: 'app-dynamic-contact',
  imports: [DynamicTel, DecimalPipe],
  templateUrl: './dynamic-contact.html',
  styleUrl: './dynamic-contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    role: 'article',
  },
})
export class DynamicContact {
  readonly contacts = model(createContacts());

  protected addContact(): void {
    this.contacts.update((contacts) => {
      return [...contacts, createContact()];
    });
  }

  protected changeContact(index: number, value: ContactModel): void {
    this.contacts.update((contacts) => {
      return contacts.map((contact, i) => {
        if (i === index) {
          contact.name = value.name;
          contact.tels = value.tels;
        }

        return contact;
      });
    });
  }

  protected removeContact(index: number): void {
    this.contacts.update((contacts) => {
      return contacts.filter((_value, i) => i !== index);
    });
  }
}
