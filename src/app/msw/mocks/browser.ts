import { handlers } from '@/shared/api/mocks/handlers';
import { setupWorker } from 'msw/browser';

export const worker = setupWorker(...handlers);
