"use server";

import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "../prisma";

export async function syncUser() {
  const user = await currentUser();
  if (!user) return null;

  const email = user.emailAddresses[0]?.emailAddress;
  if (!email) return null;

  const existingUser = await prisma.user.findUnique({
    where: { clerkId: user.id },
  });

  if (existingUser) return existingUser;

  const dbUser = await prisma.user.create({
    data: {
      clerkId: user.id,
      email,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phoneNumbers[0]?.phoneNumber,
    },
  });

  return dbUser;
}
