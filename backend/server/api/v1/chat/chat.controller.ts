import { Request, Response } from "express";
import l, { logger } from "../../../common/logger";
import { manageError } from "../../../helper/response.helper";
import ChatService from "./chat.service";
import { BaseController } from "../_base.controller";

export class Controller extends BaseController {
    async chat(req: Request, res: Response): Promise<void> {
        try {
            const response = await ChatService.chat(req.body);
            super.response(res, response, 200, "SuccessFully get the response");
        }
        catch (error) {
            logger.error(error);
            const err = manageError(error);
            l.error(`Error in login, err code: ${400}`);
            l.error(err.message);
            super.response(res, '', err.code, err.message);
        }
    }
}

export default new Controller();