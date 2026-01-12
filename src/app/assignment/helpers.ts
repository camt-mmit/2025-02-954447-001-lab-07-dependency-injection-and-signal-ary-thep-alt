import { Section, SectionItem } from './types';

export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

export function toSections(data: number[][] | null): Section[] {
  return (data ?? []).map((row) => ({
    id: generateId(),
    items: row.map((num) => ({ id: generateId(), value: num })),
  }));
}

export function fromSections(sections: Section[]): number[][] {
  return sections.map((sec) => sec.items.map((item) => item.value));
}

export function createItem(value = 0): SectionItem {
  return { id: generateId(), value };
}

export function createSection(): Section {
  // แก้ไขตรงนี้: ให้ items มีค่าเริ่มต้นเป็น array ที่มี 1 item เสมอ
  return { id: generateId(), items: [createItem()] };
}
