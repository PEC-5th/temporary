import { HttpResponse, http } from 'msw';

import { User } from '@/shared/types';

const users: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

export const userHandlers = [
  // GET 요청 처리
  http.get('/api/users', () => {
    return HttpResponse.json(users);
  }),

  // GET 요청 처리 (특정 사용자)
  http.get('/api/users/:id', ({ params }) => {
    const { id } = params;
    const user = users.find((u) => u.id === Number(id));
    return user
      ? HttpResponse.json(user)
      : new HttpResponse(null, { status: 404 });
  }),

  // POST 요청 처리
  http.post('/api/users', async ({ request }) => {
    const newUser = (await request.json()) as Omit<User, 'id'>;
    const createdUser: User = { id: users.length + 1, ...newUser };
    users.push(createdUser);
    return HttpResponse.json(createdUser, { status: 201 });
  }),
];
