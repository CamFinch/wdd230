async function getCompanies(){
    const response = await fetch('https://github.com/CamFinch/wdd230/blob/main/chamber/data/members.json');
    const data = await response.json();
    console.table(data.companies);
    const cards = document.querySelector('.company-cards');
    const displayCompanies = (companies) => {
        company.forEach((companies) => {
            let cards = document.createElement('section');
            let name = document.createElement('h3');
            let address = document.createElement('p');
            let phone = document.createElement('p');
            let url = document.createElement('p');
            let logo = document.createElement('img');
            let member = document.createElement('p');
            
            

            
        });
    }

    displayCompanies();

}

