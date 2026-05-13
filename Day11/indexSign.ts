interface UserMetadata {

  createdAt: Date;

  [key: string]:
    | string
    | number
    | boolean
    | Date;
}