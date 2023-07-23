import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware( {
    publicRoutes: ['/','/contact','/api/contact']
}
        
);

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};