fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const infoList = document.getElementById('information-list');
        data.Information.forEach(info => {
            const listItem = document.createElement('li');
            listItem.textContent = info;
            infoList.appendChild(listItem);
        });

        const prioritiesList = document.getElementById('priorities-list');
        data.Priorities.forEach(priority => {
            const listItem = document.createElement('li');
            listItem.textContent = priority;
            prioritiesList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('Error fetching the JSON file:', error);
    });
