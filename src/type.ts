export interface IProps {
  delay: number;
	immediately?: boolean;
}

type TFunction = () => void;

export interface ITime {
  dd: string;
  hh: string;
  mm: string;
  ss: string;
}

export interface IAction {
  pause: TFunction;
  start: TFunction;
  restart: TFunction;
  complete: TFunction;
}