function safeExecute<
  T extends (...args: any[]) => Promise<any>
>(fn: T) {

  return async (...args: Parameters<T>) => {

    try {
      return await fn(...args);

    } catch (error) {
      console.error(error);
      return null;
    }
  };
}