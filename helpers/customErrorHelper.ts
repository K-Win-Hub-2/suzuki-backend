import { Request, Response, NextFunction } from 'express'
import "dotenv/config";

export default function (err: any, req: Request, res: Response, next: NextFunction){
        console.log("err", err)
        if (err.name === 'TokenExpiredError') {
            res.status(401).json({
              statusCode: 401,
              success: false,
              message: 'Token expired',
              data: null,
            });
          } else if (err.name === 'JsonWebTokenError'){
            res.status(401).json({
              statusCode: 401,
              success: false,
              message: 'Invalid token',
              data: null,
            }) } else {
            res.status(500).json({statusCode: 500, success: false, message: "Internal server error", data: null})
        }
    }
