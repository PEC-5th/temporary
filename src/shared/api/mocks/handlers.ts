import { articlesHandlers } from './articlesHandlers';
import { userHandlers } from './userHandlers';

export const handlers = [...userHandlers, ...articlesHandlers];
