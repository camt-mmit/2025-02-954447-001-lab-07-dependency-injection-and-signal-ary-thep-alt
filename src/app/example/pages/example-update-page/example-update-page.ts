import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { DynamicContact } from '../../components/dynamic-contact/dynamic-contact';
import { createContact } from '../../helpers';

@Component({
  selector: 'app-example-update-page',
  imports: [DynamicContact, JsonPipe],
  templateUrl: './example-update-page.html',
  styleUrl: './example-update-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleUpdatePage {
  protected readonly contacts = signal([createContact()]);
}
