const calculateTimeWastedOnTVShow = (tvShow) => {
  const timeWasted =
    (tvShow.numberOfEpisodes * tvShow.episodeLength * tvShow.watchedTimes) / 60;
  return `You wasted ${timeWasted} hours of your life watching ${tvShow.title}.`;
};
console.log(
  calculateTimeWastedOnTVShow({
    title: "Schitt's Creek",
    numberOfEpisodes: 80,
    episodeLength: 20,
    watchedTimes: 3,
  })
);
