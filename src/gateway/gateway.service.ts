import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class GatewayService {
  constructor(private readonly httpService: HttpService) {}

  proxyToFineract(
    path: string,
    method: string,
    body?: any,
  ): Observable<AxiosResponse<any>> {
    const fineractUrl = 'http://localhost:8080'; // Replace with the actual Apache Fineract URL
    const url = `${fineractUrl}/${path}`;
    return this.httpService.request({
      method,
      url,
      data: body,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
