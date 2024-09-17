import { Express , Request, Response} from "express"
import { verifyToken } from "../middlewares/verifyToken"
import { createUser,  listAllUser, readUser, updateUser, deleteUser } from "../controllers/userController"
import { checkAdminOrSelf, checkAdminType } from "../validators/authCheck"
import catchError from "../lib/catchError"
module.exports = (app: Express): void =>{
    app.route("/api/v1/users")
        .get(verifyToken, checkAdminType, catchError(listAllUser))
        .post(catchError(createUser))

    app.route("/api/v1/user/:id")
       .put(verifyToken, checkAdminOrSelf, catchError(updateUser))
       .get(verifyToken, catchError(readUser))
       .delete(verifyToken, checkAdminOrSelf, catchError(deleteUser))
}