// export async function getMovies(query) {
//   try {
//     if (!query) return;
//     const res = await fetch(
//       `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${KEY}&type=video&q=${query}&maxResults=5`,
//     );
//     if (!res.ok) throw Error("ERROR");
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     throw Error("Failed");
//   }
// }

// const KEY = "AIzaSyBzBRFCeqZd5IoGWNuatN5kI4oQBPcFxbo";
// export async function getMovies(query) {
//   try {
//     if (!query) return;
//     const res = await fetch(
//       `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${KEY}&type=video&q=${query}&maxResults=5`,
//     );
//     if (!res.ok) throw Error("Res Is Not OK");
//     const data = await res.json();
//     // console.log(data);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }
