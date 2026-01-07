export const runtime = "nodejs";
"use server";
import { db } from "@/lib/prisma";
import { auth, clerkClient } from "@clerk/nextjs/server";

export async function updateUsername(username) {
  //Promise wise
  // auth().then(async authResponse => {
  //   const { userId: user_id } = authResponse();
    
  //   if(!user_id){
  //     throw new Error("User id not found");
  //   }


  //   // Check if username is already taken
  // const existingUser = await db.user.findUnique({
  //   where: { username },
  // });

  // if (existingUser && existingUser.id !== user_id) {
  //   throw new Error("Username is already taken");
  // }

  // })
  
  const { userId } = await auth();  
  if (!userId) {
    throw new Error("Unauthorized");
  }

  // Check if username is already taken
  const existingUser = await db.user.findUnique({
    where: { username },
  });

  if (existingUser && existingUser.id !== userId) {
    throw new Error("Username is already taken");
  }

  // Update username in database
  await db.user.update({
    where: { clerkUserId: userId },
    data: { username },
  });

  // Update username in Clerk
  try {
    const { users } = await clerkClient();
    await users.updateUser(userId, {
      username,
    });
    return { success: true };
  } catch (exception) {
    throw new Error(`${exception.message || "failed to updated user!"}`);
  }
}

export async function getUserByUsername(username) {
  const user = await db.user.findUnique({
    where: { username },
    select: {
      id: true,
      name: true,
      email: true,
      imageUrl: true,
      events: {
        where: {
          isPrivate: false,
        },
        orderBy: {
          createdAt: "desc",
        },
        select: {
          id: true,
          title: true,
          description: true,
          duration: true,
          isPrivate: true,
          _count: {
            select: { bookings: true },
          },
        },
      },
    },
  });

  return user;
}
