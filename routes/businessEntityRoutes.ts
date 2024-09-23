import { Express } from "express";
import { verifyToken } from "../middlewares/verifyToken"
import { createBusinessEntity, deleteBusinessEntity, listAllBusinessEntities, readBusinessEntity, updateBusinessEntity } from "../controllers/businessEntityController";

module.exports = (app: Express) => {
        app.route("/api/v1/business-entities")
           .get(listAllBusinessEntities)
           .post(createBusinessEntity);

  app.route("/api/v1/business-entity/:id")
    .get(verifyToken, readBusinessEntity)
    .put(verifyToken, updateBusinessEntity)
    .delete(verifyToken, deleteBusinessEntity);
};