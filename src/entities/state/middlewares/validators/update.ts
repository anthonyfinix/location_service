import { NextFunction, Request, Response } from "express";
import { BadRequest } from "../../../../util/error/index";
import { joi_user_optional } from '../../utils/joi/joi.user';
export default async (req: Request, res: Response, next: NextFunction) => {
    let errors = [];
    let user_validation = joi_user_optional.validate(req.query);
    if (user_validation.error) errors.push(user_validation.error.details)
    if (errors.length) return next(new BadRequest({ details: errors }))
    return next();

}