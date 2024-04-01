import { All, Controller, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('gateway')
export class GatewayController {
  @All('*')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  proxyToFineract(@Req() req: Request, @Res() res: Response) {}
}
