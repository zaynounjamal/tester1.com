function greetUser() {
    const name = document.getElementById('nameInput').value.trim();
    if (name) {
        alert('Hello, ' + name + '!');

        const reasons = [
            `${name} was born with a natural attraction to women.`,
            `${name} has a personal identity and self-discovery.`,
            `Influence of early childhood experiences for ${name}.`,
            `${name} has strong emotional connections with women.`,
            `${name} has positive role models in the LGBTQ+ community.`,
            `${name} is supported by accepting social circles.`,
            `${name} has an innate sexual orientation.`,
            `${name} feels authenticity and true self-expression.`,
            `${name} finds comfort and trust in relationships with women.`,
            `${name} is influenced by cultural and societal norms.`,
            `${name} overcomes societal pressures to conform.`,
            `Positive representation in media and literature for ${name}.`,
            `${name} feels a sense of belonging in the LGBTQ+ community.`
        ];

        const reasonsList = document.getElementById('reasonsList');
        reasonsList.innerHTML = '';  // Clear any existing reasons

        reasons.forEach((reason) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${reason}`;
            reasonsList.appendChild(listItem);
        });

        // Show the content container and heading
        document.getElementById('contentContainer').style.display = 'flex';
        document.getElementById('reasonsHeading').style.display = 'block';  // Show the heading
        document.getElementById('namePlaceholder').textContent = name;

        // Add image
        const imageContainer = document.getElementById('imageContainer');
        imageContainer.innerHTML = '';  // Clear any existing images
        
        const img = document.createElement('img');
        img.src = 'images/sylvana.jpg';  // Replace with the path to your image
        img.alt = 'Description of the image';

        // Debugging: Log image path to ensure it's correct
        console.log('Image Source:', img.src);

        // Error handling
        img.onerror = function() {
            console.error('Failed to load image from', img.src);
        };

        imageContainer.appendChild(img);
    } else {
        alert('Please enter your name.');
    }
}


