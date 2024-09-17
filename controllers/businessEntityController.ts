import { Request, Response } from "express";
import businessEntityServices from "../services/businessEntityServices";
import { BusinessEntityListResponse } from "../helpers/businessEntityRequestResponseInterface"
import { errorResponse } from "../helpers/responseHelper";
import mongoose from "mongoose";

export const listAllBusinessEntities = async (req: Request, res: Response) => {
    try {
        const data: BusinessEntityListResponse = await businessEntityServices.listAll();
        res.status(data.statusCode).json(data);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
};

  // Read business entity by ID
export const readBusinessEntity = async (req: Request, res: Response) => {
    if (!req.user["isSuperAdmin"]) {
      return res.status(401).json(
        errorResponse({
          statusCode: 401,
          message: "You can't read business entity data",
          data: null,
        })
      );
    }
    const data = await businessEntityServices.readById(new mongoose.Types.ObjectId(req.params.id));
    res.status(data.statusCode).json(data);
  }

export const createBusinessEntity = async (req: Request, res: Response) => {
    // if (!req.user["isSuperAdmin"]) {
    //   return res.status(401).json(
    //     errorResponse({
    //       statusCode: 401,
    //       message: "You can't create business entity name",
    //       data: null,
    //     })
    //   );
    // }
    const data = await businessEntityServices.create(req.body);
    res.status(data.statusCode).json(data);
  };

// Update a business entity
export const  updateBusinessEntity = async (req: Request, res: Response) => {
    if (!req.user["isSuperAdmin"]) {
      return res.status(401).json(
        errorResponse({
          statusCode: 401,
          message: "You can't edit business entity data",
          data: null,
        })
      );
    }
    const data = await businessEntityServices.updateById(new mongoose.Types.ObjectId(req.params.id), req.body);
    res.status(data.statusCode).json(data);
  };

  // // Delete a business entity
  export const deleteBusinessEntity = async (req: Request, res: Response) => {
    if (!req.user["isSuperAdmin"]) {
      return res.status(401).json(
        errorResponse({
          statusCode: 401,
          message: "You can't delete business entity data",
          data: null,
        })
      );
    }
    const data = await businessEntityServices.delete(new mongoose.Types.ObjectId(req.params.id));
    res.status(data.statusCode).json(data);
  };
