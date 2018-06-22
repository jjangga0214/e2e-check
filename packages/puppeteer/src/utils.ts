export function $eval<T extends Element = HTMLElement, A = any, R = any>(
  selector: string,
  pageFunction: (element: T, ...args: A[]) => R,
  ...args: A[]
): Promise<ReturnType<typeof pageFunction>> {
  return page.$eval(selector, pageFunction as any, ...args);
}
