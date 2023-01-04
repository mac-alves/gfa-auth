import { Injectable } from '@angular/core';

import { TokenAdapter } from '@gfa/gfa-infra';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private tokenAdapter: TokenAdapter) { }

  async authenticate(token: string) {
    await new Promise(resolve => setTimeout(resolve, 500));
    this.tokenAdapter.token = token;
  }

  isTokenValid() {
    return !!this.tokenAdapter.token;
  }
}
