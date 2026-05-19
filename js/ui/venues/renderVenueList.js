export function renderVenueList(container, response) {
  const venueArray = response.data || [];

  if (venueArray.length === 0) {
    container.innerHTML = "<div class='text-center'>No venues found</div>";
    return;
  }

  const venueElements = venueArray.map((venue) => createVenueCard(venue));
  container.innerHTML = "";
  container.append(...venueElements);
}

const createVenueCard = (venue) => {
  const { media, id } = venue;

  const card = document.createElement("a");
  card.className = "bg-cover bg-center h-64 rounded-lg shadow-md";
  card.href = `/venue/?id=${id}`;

  const imageUrl = media?.[0] || "https://placehold.co/400x400";
  card.style.backgroundImage = `url(${imageUrl})`;

  return card;
};
