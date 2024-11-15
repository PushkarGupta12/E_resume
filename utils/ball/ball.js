const skills = [
    { name: "HTML", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGUxODNtCFqUiiB66Hd0m7daeq4SwHh8uYFg&s" },
    { name: "CSS", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFU69-VFq7isY4duCvzZfWdbQsIr2ibg83j9s&s" },
    { name: "JavaScript", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa1-T_FbxrRG3I1eNmGVc59bGHMLn8XcLN9RUq9V5pvqPr5h3NGg&s" },
    { name: "Python", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxbGVh4JrI8TqD1fepbm8j7z8lRbYhRli9Iw&s" },
    { name: "React", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwqDExY-_6AjOaVymht8mK18bwX_zmwTNOkg&s" }
]


const container = document.querySelector('.Ball-container');

        // Loop through the skills array and create HTML elements dynamically
        skills.forEach(skill => {
            const skillElement = document.createElement('div');
            skillElement.classList.add('skill');

            skillElement.innerHTML = `
                <img src="${skill.image}" alt="${skill.name}" class="skill-image">
                <h2 class="skill-name">${skill.name}</h2>
            `;

            // Append the skill element to the container
            container.appendChild(skillElement);
        });


