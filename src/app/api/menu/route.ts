// src/app/api/menu/route.ts
import { NextResponse } from 'next/server';

const menuData = {
  data: [
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
  ],
};

export async function GET() {
  return NextResponse.json(menuData);
}


// fetch individual menu items by their id

// import { NextResponse } from 'next/server';

// const menuData = [
//   {
//     id: 1,
//     name: 'Classic Cheeseburger',
//     about: 5.99,
//     learn: 'A juicy beef patty with cheese, lettuce, tomato, and our secret sauce.',
//   },
//   {
//     id: 2,
//     name: 'Bacon BBQ Burger',
//     about: 6.99,
//     learn: 'Smoky bacon, BBQ sauce, crispy onions, and cheddar cheese.',
//   },
// ];

// export async function GET(
//   request: Request,
//   { params }: { params: { id: string } }
// ) {
//   const item = menuData.find((menu) => menu.id === parseInt(params.id));
//   if (item) {
//     return NextResponse.json(item);
//   } else {
//     return NextResponse.json({ error: 'Item not found' }, { status: 404 });
//   }
// }

