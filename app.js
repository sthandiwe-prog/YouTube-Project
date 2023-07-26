let api_key = "AIzaSyAS7-USC07Kxj8EDIxzAqmPcj6vRG5eFeo";
let video_http =
  "https://www.googleapis.com/youtube/v3/videos?part=snippet&key=AIzaSyAS7-USC07Kxj8EDIxzAqmPcj6vRG5eFeo";

fetch(
  video_http +
    new URLSearchParams({
      part: "snippet",
      chart: "mostPopular",
      maxResuls: 1,
      regionCode: "IN",
    })
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
