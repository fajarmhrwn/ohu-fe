interface Props {
  nama: string;
  start: string;
  end: string;
  hari: string;
}

export const checkLive = (arr: Props[]) => {
  const curTime = new Date().getTime();
  for (let i = 0; i < arr.length; i++) {
    const day = arr[i].hari.split(',')[0] === 'Sabtu' ? 27 : 28;
    const startSplit = arr[i].start
      .split('.')
      .map((item) => parseInt(item, 10));
    const endSplit = arr[i].end.split('.').map((item) => parseInt(item, 10));
    const start = new Date(
      2022,
      7,
      day,
      startSplit[0],
      startSplit[1]
    ).getTime();
    const end = new Date(2022, 7, day, endSplit[0], endSplit[1]).getTime();
    if (curTime >= start && curTime <= end) {
      return true;
    }
  }

  return false;
};
