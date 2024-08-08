import { protectedRoutes, authRoutes } from "@/router/routes";
import axios from "axios";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const currentUserCookie = request.cookies.get("currentUser");
  const refreshTokenCookie = request.cookies.get("refreshToken");
  let currentUser;
  const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8080";

  try {
    currentUser =
      currentUserCookie &&
      JSON.parse(decodeURIComponent(currentUserCookie.value));
  } catch (error) {
    console.error("Ошибка при разборе куки currentUser:", error);
  }

  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/landing", request.nextUrl.origin));
  }

  if (protectedRoutes.includes(request.nextUrl.pathname)) {
    if (!currentUser) {
      return NextResponse.redirect(new URL("/landing", request.nextUrl.origin));
    }
    if (Date.now() > currentUser?.expiredAt && refreshTokenCookie?.value) {
      const refreshToken = JSON.parse(
        decodeURIComponent(refreshTokenCookie?.value)
      );
      try {
        const response = await axios.get(
          `${BACKEND_URL}/api/v1/auth/token/refresh`,
          {
            headers: {
              "Content-Type": "application/json",
              "Refresh-Token": refreshToken.token,
              Authorization: `Bearer ${currentUser.token}`,
            },
          }
        );

        const newAccessToken = response?.data?.accessToken;
        if (newAccessToken) {
          const response = NextResponse.next();
          response.headers.set("Authorization", `Bearer ${newAccessToken}`);
          return response;
        } else {
          request.cookies.delete("currentUser");
          return NextResponse.redirect(
            new URL("/landing", request.nextUrl.origin)
          );
        }
      } catch (error) {
        console.error("Ошибка при обновлении токена:", error);
        request.cookies.delete("currentUser");
        return NextResponse.redirect(
          new URL("/landing", request.nextUrl.origin)
        );
      }
    } else {
      const token = currentUser?.token;
      const response = NextResponse.next();
      response.headers.set("Authorization", `Bearer ${token}`);
      return response;
    }
  }

  return NextResponse.next();
}
