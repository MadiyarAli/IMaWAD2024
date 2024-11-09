async function fetchHero() {
  const heroId = document.getElementById("heroId").value;
  if (!heroId) {
    alert("Please enter a Hero ID");
    return;
  }

  const url = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${heroId}.json`;

  try {
    const response = await fetch(url);
    const hero = await response.json();

    displayHero(hero);
  } catch (error) {
    console.error("Error fetching hero:", error);
    alert("Failed to fetch hero. Check the ID and try again.");
  }
}

function displayHero(hero) {
  // document.getElementById("heroImage").src = hero.images.lg;

	// console.log(hero)

  const heroDetails = `
		<img id="heroImage" src="${hero.images.lg}" alt="Hero Image" class="hero-image"></img>
    <h2>${hero.name}</h2>
    <p><strong>Full Name:</strong> ${hero.biography.fullName}</p>
    <p><strong>Place of Birth:</strong> ${hero.biography.placeOfBirth}</p>
    <p><strong>First Appearance:</strong> ${hero.biography.firstAppearance}</p>
    <p><strong>Publisher:</strong> ${hero.biography.publisher}</p>
    <p><strong>Alignment:</strong> ${hero.biography.alignment}</p>
    <p><strong>Intelligence:</strong> ${hero.powerstats.intelligence}</p>
    <p><strong>Strength:</strong> ${hero.powerstats.strength}</p>
    <p><strong>Speed:</strong> ${hero.powerstats.speed}</p>
    <p><strong>Durability:</strong> ${hero.powerstats.durability}</p>
    <p><strong>Power:</strong> ${hero.powerstats.power}</p>
    <p><strong>Combat:</strong> ${hero.powerstats.combat}</p>
    <p><strong>Occupation:</strong> ${hero.work.occupation}</p>
    <p><strong>Group Affiliation:</strong> ${hero.connections.groupAffiliation}</p>
  `;

  document.getElementById("heroDetails").innerHTML = heroDetails;
}
