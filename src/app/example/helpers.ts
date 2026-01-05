import { Contact, ContactModel, TelModel } from './types';
export function createTel(tel = ''): TelModel {
  return { value: tel };
}
export function createContact(contact?: Contact): ContactModel {
  const { name, tels } = contact ?? {
    name: '',
    tels: [''],
  };
  return {
    name,
    tels: tels.map((value) => createTel(value)),
  };
}
