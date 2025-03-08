const BASE_API_URL = process.env.BASE_API_URL;

export const fetchEvents = async () => {
  try {
    const response = await fetch(`${BASE_API_URL}/news_and_events`);
    if (!response.ok) {
      throw new Error(`Failed to fetch events: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};

export const fetchEventBySlug = async (slug) => {
  try {
    const response = await fetch(
      `${BASE_API_URL}/news_and_events?slug=${slug}`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch event: ${response.statusText}`);
    }
    const data = await response.json();
    if (data.length === 0) {
      throw new Error(`Event not found for slug: ${slug}`);
    }
    return data[0];
  } catch (error) {
    console.error("Error fetching event by slug:", error);
    throw error;
  }
};

export const fetchAnnouncements = async (page, perPage, sortOrder = "desc") => {
  try {
    const response = await fetch(
      `${BASE_API_URL}/sacas_posts?per_page=${perPage}&page=${page}&orderby=date&order=${sortOrder}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch announcements: ${response.statusText}`);
    }

    const totalRecords = response.headers.get("x-wp-total");
    const totalPages = response.headers.get("x-wp-totalpages");
    const data = await response.json();
    const latestResponse = await fetch(
      `${BASE_API_URL}/sacas_posts?per_page=1&page=1&orderby=date&order=desc`
    );
    const latestData = await latestResponse.json();
    const latest = latestData[0];

    return {
      data,
      totalRecords: Number(totalRecords),
      totalPages: Number(totalPages),
      latest,
    };
  } catch (error) {
    console.error("Error fetching announcements:", error);
    throw error;
  }
};

export const fetchAnnouncementBySlug = async (slug) => {
  try {
    const response = await fetch(`${BASE_API_URL}/sacas_posts?slug=${slug}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch announcement: ${response.statusText}`);
    }
    const data = await response.json();
    if (data.length === 0) {
      throw new Error(`Announcement not found for slug: ${slug}`);
    }
    return data[0];
  } catch (error) {
    console.error("Error fetching announcement by slug:", error);
    throw error;
  }
};

export const fetchMedia = async (mediaId) => {
  if (!mediaId) return null;
  try {
    const response = await fetch(`${BASE_API_URL}/media/${mediaId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch media: ${response.statusText}`);
    }
    const mediaData = await response.json();
    return mediaData.guid?.rendered;
  } catch (error) {
    console.error(`Error fetching media (ID: ${mediaId}):`, error);
    throw error;
  }
};
