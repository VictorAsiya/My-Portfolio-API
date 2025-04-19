// app/api/menu/route.js

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

export async function GET() {
  const data = [
    {
      id: 1,
      name: 'Classic Cheeseburger',
      about: 5.99,
      learn: 'A juicy beef patty with cheese, lettuce, tomato, and our secret sauce.',
    },
    {
      id: 2,
      name: 'Bacon BBQ Burger',
      about: 6.99,
      learn: 'Smoky bacon, BBQ sauce, crispy onions, and cheddar cheese.',
    },
  ];

  return new Response(JSON.stringify({ data }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
