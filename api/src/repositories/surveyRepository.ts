import { EntityRepository, Repository } from "typeorm";
import { Survey } from "../models/survey";

@EntityRepository(Survey)
class surveyRepository extends Repository<Survey> {}

export { surveyRepository };
