type AllEvents =
  | 'click'
  | 'dbclick'
  | 'submit'
  | 'reset'
  | 'keypress';

type MouseEvents =
  Extract<AllEvents, 'click' | 'dbclick'>;

type NonFormEvents =
  Exclude<AllEvents, 'submit' | 'reset'>;