declare module 'axios-decorators' {
  export type Request = {
    path?: object;
    data?: object;
    params?: object;
  };

  type MethodOptions = {
    headers?: object | (() => object);
  };

  export function Client (options?: { name?: string; baseURL?: string; basePath?: string; }): void;
  export function Client (name?: string): void;

  export function GET (endpoint: string, methodOptions?: MethodOptions): void;

  export function POST (endpoint: string, methodOptions?: MethodOptions): void;

  export function PUT (endpoint: string, methodOptions?: MethodOptions): void;

  export function PATCH (endpoint: string, methodOptions?: MethodOptions): void;

  export function DELETE (endpoint: string, methodOptions?: MethodOptions): void;

  export class ClientConfigurator {
    static setBaseURL (baseURL: string | ((serviceName: string) => void)): void;
    static setHeaders (headers: object | ((serviceName: string) => void)): void;
    static getBaseURL (serviceName: string): string;
    static getHeaders (serviceName: string): string;
  }

  export class ClientLogger {
    static print (): void;
    static setStatus (status: boolean): void;
  }
}