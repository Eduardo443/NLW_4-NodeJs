import { request, Request, response, Response } from 'express'
import { getCustomRepository } from 'typeorm';
import { surveyRepository } from '../repositories/surveyRepository'

class SurveyController {
    async create(req: Request, res: Response){
        const { title, description } = req.body

        const SurveyRepository = getCustomRepository(surveyRepository);

        const survey = SurveyRepository.create({ title, description });

        await SurveyRepository.save(survey);

        return res.status(201).json(survey);
    }
    async show(req: Request, res: Response){
        const SurveyRepository = getCustomRepository(surveyRepository);

        const all = await SurveyRepository.find();
        return res.json(all)
    }
}

export { SurveyController };