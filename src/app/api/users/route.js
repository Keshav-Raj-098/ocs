import { NextResponse } from "next/server";
import prisma from "../../../../prisma/prisma.js"
import md5 from "md5";

/**
 * Handles user signup (POST request)
 */
export async function POST(req) {
  try {
    const { userid, raw_password, role, action } = await req.json();
  
    

    

    if (action === "signup") {

      if (!userid || !raw_password || !role || !action) {
        return NextResponse.json({ message: "All fields are required" }, { status: 403 });
      }

      if (role !== "admin" && role !== "basic") {
        return NextResponse.json({ message: "Invalid role type" }, { status: 403 });
      }

      const existingUser = await prisma.user.findUnique({ where: { userid } });

      if (existingUser) {
        return NextResponse.json({ message: "User already exists" }, { status: 400 });
      }

      const user = await prisma.user.create({
        data: {
          userid,
          password_hash: md5(raw_password),
          role,
        },
      });

      return NextResponse.json({ message: "User created successfully", user }, { status: 201 });
    }

    if (action === "fetch") {

      if (!userid || !raw_password) {
        return NextResponse.json({ message: "All fields are required" }, { status: 403 });
      }

      const user = await prisma.user.findUnique({ where: { userid } });

      if (!user) {
        return NextResponse.json({ message: "User does not exist" }, { status: 208 });
      }

      if (user.password_hash !== md5(raw_password)) {
        return NextResponse.json({ message: "Incorrect password" }, { status: 208 });
      }

      if (user.role === "admin") {
        const allUsers = await prisma.user.findMany();
        return NextResponse.json({ message: "All users retrieved successfully", users: allUsers }, { status: 200 });
      }

      return NextResponse.json({ message: "Basic user found", users: [user] }, { status: 200 });
    }

    return NextResponse.json({ message: "Invalid action" }, { status: 400 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
