const alumniMembers = [
    {
        name: 'Jackie Robinson',
        img: 'images/Jackie Robinson.jpg',
        position: 'Athlete',
        age: 53,
        profession: 'Baseball Player',
        accomplishments: 'Jackie Robinson was the first African American to play in Major League Baseball, breaking the color barrier in 1947. He won the MLB Rookie of the Year Award that same year and was selected as an All-Star six times. In 1949, he earned the National League Most Valuable Player (MVP) Award and helped the Brooklyn Dodgers win the World Series in 1955. Robinson was inducted into the National Baseball Hall of Fame in 1962 and became a strong advocate for civil rights and social justice throughout his life.'
    },

];

function generateAlumniCards() {
    const alumniCardsContainer = document.getElementById('alumniCards');

    alumniMembers.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'mb-3'); // Bootstrap classes for responsiveness

        // Styling card based on position:
        let backgroundColor;

        switch (member.position.toLowerCase()) {
            case 'athlete':
                backgroundColor = '#2774AE'; // Yellow for athletes
                break;
        }
        card.style.backgroundColor = backgroundColor;

        card.innerHTML = `
            <div class="card border-0"> <!-- Removed border class -->
                <div class="card-header"><b>${member.name}</b></div>
                <div class="card-body">
                    <img style="width: 200px" src="${member.img}" alt="${member.name}">
                    <p><strong>Position:</strong> ${member.position}</p>
                    <p><strong>Age:</strong> ${member.age}</p>
                    <p><strong>Profession:</strong> ${member.profession}</p>
                    <p><strong>Accomplishments:</strong> ${member.accomplishments}</p>
                </div>
            </div>
        `;

        alumniCardsContainer.appendChild(card);
    });
}

// Call generateAlumniCards when the window loads
window.onload = generateAlumniCards;
