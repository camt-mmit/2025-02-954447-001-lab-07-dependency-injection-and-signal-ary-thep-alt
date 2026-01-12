import { APP_ID, Injectable, inject } from '@angular/core';

const keyName = 'ng-section-data';

@Injectable({
  providedIn: 'root',
})
export class SectionStorage {
  private readonly keyName = `${inject(APP_ID)}-${keyName}` as const;

  // คืนค่าเป็น number[][] ตามโจทย์
  get(): number[][] | null {
    const jsonText = localStorage.getItem(this.keyName);
    return JSON.parse(jsonText ?? 'null');
  }

  // รับค่าเป็น number[][] ตามโจทย์
  set(data: number[][]): void {
    const jsonText = JSON.stringify(data);
    localStorage.setItem(this.keyName, jsonText);
  }
}
