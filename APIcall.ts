interface SwitchGame {
  id: number;
  name: string;
  genre: string[];
  developers: string[];
  publisher: string[];
  releaseDates: {
    Japan: string;
    NorthAmerica: string;
    Europe: string;
    Australia: string;
  };
}
const fetchData = async () => {
  let switchGames: SwitchGame[] = [];
  await fetch("https://api.sampleapis.com/switch/games")
    .then((res) => {
      return res.json();
    })
    .then((re) => {
      switchGames = re as SwitchGame[];

      console.log(switchGames.shift());

      //   const reversed = switchGames.reverse();

      //   console.log(reversed.pop());
      //   console.log(reversed.pop());
      //   console.log(reversed.pop());
      //   console.log(reversed.pop());
      //   console.log(reversed.pop());
      //   console.log(reversed.pop());
      //   console.log(reversed.pop());
      //   console.log(reversed.pop());
      //   console.log(reversed.pop());
    });

  //   console.log("re2", switchGames.length);
};
fetchData();
