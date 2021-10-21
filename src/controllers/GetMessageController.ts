import { Request, Response } from "express"
import { GetMessageService } from "../services/GetMessageService"

class GetMessageController {
  async handle(request: Request, response: Response) {
    const service = new GetMessageService()
    const result = await service.execute()
    return response.json(result)
  }
}

export {
  GetMessageController
}