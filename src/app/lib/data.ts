export async function getPodcasts() {
  try {
    const res = await fetch("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json", {
      next: { revalidate: 86400 },
    });

    return res.json();
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

export async function getPodcastDetails(id: string) {
  try {
    const res = await fetch(`https://itunes.apple.com/lookup?id=${id}&media=podcastds&entity=podcastEpisode`, {
      next: { revalidate: 86400 },
    });
    return res.json();
  } catch (error) {
    console.error("Error fetching data", error);
  }
}
