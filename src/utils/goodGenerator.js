export const generateGoods = (amount = 15) => {
  return Array.from({ length: amount }).map(() => generateGood());
};

export const generateGood = () => {
  return {
    id: Date.now().toString(16) + Math.random().toString(16).substring(0, 10),
    name: generateWord(),
    description: generateText(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))],
    price: Math.round(Math.random() * 9989) + 10,
    rating: Math.round(Math.random() * 99) + 1,
    imageUrl: URLS[Math.round(Math.random() * (URLS.length - 1))],
  };
};

const generateWord = () => {
  const length = Math.round(Math.random() * 6) + 6;
  return Array.from({ length })
    .map(() => String.fromCharCode(Math.round(Math.random() * 25) + 97))
    .join('');
};

const generateText = () => {
  const length = Math.round(Math.random() * 15) + 6;
  return Array.from({ length })
    .map(() => generateWord())
    .join(' ');
};

const COLORS = [
  'blue',
  'red',
  'green',
  'lightblue',
  'purple',
  'yellow',
  'black',
  'white',
  'pink',
  'gray',
];

const URLS = [
  'https://thumbs.dreamstime.com/b/cute-cat-portrait-square-photo-beautiful-white-closeup-105311158.jpg',
  'https://i.pinimg.com/736x/a7/00/60/a700605d374be5a985a2b6b28a2223fb.jpg',
  'https://as2.ftcdn.net/v2/jpg/02/17/51/67/1000_F_217516710_OZVTU3WGyk4v5UkmABUX6UgZJCHCX8Il.jpg',
  'https://i.pinimg.com/564x/98/fc/88/98fc8863c7e68df57cd7ad7442f0ec18.jpg',
  'https://stickerly.pstatic.net/sticker_pack/6zMOx6ZOhuUwbQUnmouqPw/6K55MX/3/3845b7cc-d6a4-40bd-9611-a0d5b9c19014.png',
  'https://i.pinimg.com/736x/09/83/a3/0983a33b1e7c0212a2e9e737a393fedf.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX2cjZK7LtZbs9x_2xzW7oSn9XKf0pJidPlg&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFO-UW5_gEvUX7_AtLz4caqL1mTpItvjicA&usqp=CAU',
  'https://64.media.tumblr.com/f2cca4c1ceccbfb031ccb56c2cb4cc52/c3b72a8207623b6b-38/s640x960/d4c54c0b5c4ea8dd07ead269d9a2de102c0e2a1b.jpg',
  '',
];
