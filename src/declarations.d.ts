declare module "@gfa/gfa-infra" {
  export class TokenAdapter {
    public static KEY_STORAGE: string;

    public get token(): string
    public removeToken(): void
    public set token(token: string)
  }
}
