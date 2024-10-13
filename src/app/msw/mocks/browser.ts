import { handlers } from '@/shared/api/mocks/entry/handlers';
import { setupWorker } from 'msw/browser';

export const worker = setupWorker(...handlers);
