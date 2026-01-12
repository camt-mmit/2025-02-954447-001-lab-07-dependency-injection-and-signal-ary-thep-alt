import { Section, SectionItem } from './types';

// สร้าง ID แบบสุ่ม
export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

// --- Adapter Functions ---

// 1. แปลงจาก Storage (number[][]) มาเป็น View (Section[])
export function toSections(data: number[][] | null): Section[] {
  return (data ?? []).map((row) => ({
    id: generateId(),
    items: row.map((num) => ({ id: generateId(), value: num })),
  }));
}

// 2. แปลงจาก View (Section[]) กลับไปเป็น Storage (number[][])
export function fromSections(sections: Section[]): number[][] {
  return sections.map((sec) => sec.items.map((item) => item.value));
}

// --- Factory Functions ---

export function createItem(value = 0): SectionItem {
  return { id: generateId(), value };
}

export function createSection(): Section {
  return { id: generateId(), items: [] };
}
