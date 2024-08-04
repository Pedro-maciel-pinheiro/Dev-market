"use server";

import * as z from "zod";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, name, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const exestingUser = await getUserByEmail(email)

  if (exestingUser) {
    return { error: "Email already in use!" };
  }
   await db.user.create({
    data:{
        name,
        email,
        password:hashedPassword,
    }

   })
  return { success: "User created!" };
};
