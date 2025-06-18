import { bootstrapApplication } from '@angular/platform-browser';
import { setupWorker } from 'msw/browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { mockHandlers } from './mocks';

setupWorker(...mockHandlers).start()
  .then(() => bootstrapApplication(AppComponent, appConfig))
  .catch((err) => console.error(err));

