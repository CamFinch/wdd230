const url = '..//chamber/data/members.json';
const cards = document.querySelector('.company-cards');
async function getCompanies(){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
   // const displayCompanies = (companies) => {
       // company.forEach((companies) => {
         //   let cards = document.createElement('section');
         //   let name = document.createElement('h3');
         //   let address = document.createElement('p');
         //   let phone = document.createElement('p');
         //   let url = document.createElement('p');
         //   let logo = document.createElement('img');
         //   let member = document.createElement('p');
            

            
            
       // });
    //}

   // displayCompanies();

}

