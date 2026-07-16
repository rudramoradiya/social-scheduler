import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";


export interface AuthRequest extends Request{
    user?: any; // This will hold the authenticated user object after token verification
}

export const protect = async (req: AuthRequest, res: Response, next: NextFunction) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded: any = jwt.verify(token, process.env.JWT_SECRET!)
            // ! is used to tell TypeScript that we are sure that JWT_SECRET is not undefined or null. It asserts that the value is definitely present.
            // any is used here because the decoded token can have any shape, and we are not enforcing a specific type for it.
            // Fetch the user from the database using the ID from the decoded token, excluding the password field for security reasons.
            req.user = await User.findById(decoded.id).select("-password")
            next()
        } catch (error: any) {
            res.status(401).json({ message: error?.message || "Not authorized, token failed"})
        }
    }else{
        res.status(401).json({ message: "Not authorized, no token" });
    }
}