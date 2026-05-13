interface Car {
  make: string;
  model: string;
}

type ApiResponse<T> = {

  [K in keyof T as
    `DATA_${Uppercase<string & K>}`]: T[K]

};