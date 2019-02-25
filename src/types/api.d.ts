declare global {
  interface RequestOptions {
    method: string;
    url: string;
    endpoint?: string;
    headers?: object;
    data?: object | string;
  }

  interface APIResponse {
    ok: boolean,
    status: number,
    data: any,
    error?: any,
  }

}

export { }
