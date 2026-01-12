import { Contact, ContactModel, TelModel } from './types';

export function createTel(tel?: string): TelModel {
  return { value: tel ?? '' };
}

export function createContact(contact?: Contact): ContactModel {
  const { name, tels } = contact ?? {
    name: '',
    tels: [''],
  };

  return {
    name,
    tels: tels.map((tel) => createTel(tel)),
  };
}

export function createContacts(contacts?: readonly Contact[]): readonly ContactModel[] {
  return (contacts ?? [undefined]).map(createContact);
}

export function toTel(telModel: TelModel): string {
  return telModel.value;
}

export function toContact(contactModel: ContactModel): Contact {
  const { name, tels } = contactModel;

  return {
    name,
    tels: tels.map(toTel),
  };
}

export function toContacts(contactsModel: readonly ContactModel[]): readonly Contact[] {
  return contactsModel.map(toContact);
}
