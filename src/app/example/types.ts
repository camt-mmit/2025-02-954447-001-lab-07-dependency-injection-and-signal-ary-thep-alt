export interface Contact {
  readonly name: string;
  readonly tels: readonly string[];
}
export interface TelModel {
  value: string;
}
export interface ContactModel {
  name: string;
  tels: readonly TelModel[];
}
