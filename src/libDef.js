declare module 'axios-decorators' {
  declare export type Request = {
    path?: Object;
    data?: Object;
    params?: Object;
  };

  declare type MethodOptions = {
    headers?: Object | () => Object;
  };

  declare export function Client (options?: { name?: string; baseURL?: string; basePath?: string; }): void;
  declare export function Client (name?: string): void;

  declare export function GET (endpoint: string, methodOptions?: MethodOptions): void;

  declare export function POST (endpoint: string, methodOptions?: MethodOptions): void;

  declare export function PUT (endpoint: string, methodOptions?: MethodOptions): void;

  declare export function PATCH (endpoint: string, methodOptions?: MethodOptions): void;

  declare export function DELETE (endpoint: string, methodOptions?: MethodOptions): void;

  declare export class ClientConfigurator {
    static setBaseURL (baseURL: string | (serviceName: string) => void): void;
    static setHeaders (headers: Object | (serviceName: string) => void): void;
    static getBaseURL (serviceName: string): string;
    static getHeaders (serviceName: string): string;
  }

  declare export class ClientLogger {
    static print (): void;
    static setStatus (status: boolean): void;
  }
}
