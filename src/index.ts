import { useEffect, useState, useRef } from "react";
import { IProps, ITime, IAction, TFnReturnNumber } from "./type";

const ONE_SECOND = 1000;
const ONE_MINUTE = 60 * ONE_SECOND;
const ONE_HOUR = 60 * ONE_MINUTE;
const ONE_DAY = 24 * ONE_HOUR;

const initAry = [ONE_SECOND, ONE_MINUTE, ONE_HOUR, ONE_DAY];

const formatPrefix = (t: number): string => String(t).padStart(2, "0");

const formatTime = (t: number): ITime => {
  let i = 0;
  const ary = Array.from({ length: 4 }, () => 0);
  const [d = 0, h = 0, m = 0, s = 0] = ary;
  while (t > 0 && i <= 3) {
    const init = initAry[i];
    ary[i] = t % init;
    t = Math.floor(t / init);
    i++;
  }
  return {
    dd: formatPrefix(d),
    hh: formatPrefix(h),
    mm: formatPrefix(m),
    ss: formatPrefix(s),
  };
};

export const useCountDown = ({
  delay,
  immediately = true,
}: IProps): [ITime, IAction] => {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    delay = Number(delay);
    if (delay > 0) {
      setTime(time);
    }
  }, [delay]);

  const run = (t: number) => {
    if (t >= 0) {
      setTimeout(() => {
        const curTime = t - 1;
        setTime(curTime);
        run(curTime);
      }, ONE_SECOND);
    }
  };

  useEffect(() => {
    run(time);
  }, []);

  const timeObj = formatTime(time);
  const actionObj = {
    pause: () => {},
    start: () => {},
    restart: () => {},
    complete: () => {},
  };
  return [timeObj, actionObj];
};
