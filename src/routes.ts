import { Router } from "express"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController"
import { CreateMessageController } from "./controllers/CreateMessageController"
import { GetMessageController } from "./controllers/GetMessageController"
import { UserProfileController } from "./controllers/UserProfileController"
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated"

const router = Router()

router.post("/authenticate", new AuthenticateUserController().handle)
router.post("/messages", ensureAuthenticated, new CreateMessageController().handle)
router.get("/messages/latest", new GetMessageController().handle)
router.get("/profile", ensureAuthenticated, new UserProfileController().handle)

export { router }