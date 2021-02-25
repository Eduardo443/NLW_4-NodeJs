import { Router } from "express"
import { SurveyController } from "./controller/SurveyController";
import { UserController } from "./controller/UserController";
const router = Router();

const userController = new UserController();
const surveyController = new SurveyController();

router.post("/users", userController.create);
router.post("/survey", surveyController.create);
router.get("/survey", surveyController.show);

export { router };