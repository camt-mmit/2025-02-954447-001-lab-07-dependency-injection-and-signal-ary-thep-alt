// ใช้เฉพาะใน Component (เพื่อให้มี ID ไว้ track)
export interface SectionItem {
  id: string;
  value: number;
}

export interface Section {
  id: string;
  items: SectionItem[];
}
