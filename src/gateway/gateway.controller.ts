import { All, Controller, Req, Res } from '@nestjs/common';

@Controller('gateway')
export class GatewayController {
  @All('*')
  proxyToFineract(@Req() req, @Res() res) {}
}
