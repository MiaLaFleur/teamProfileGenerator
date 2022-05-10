const generateMemberCards = (userInput) => {

    const memberCard = userInput.map(index => {

        if (index.officeNumber) {
            const {name, id, email, officeNumber} = index;

            return `
            <div class='memberCard'>
                <div class='memberCardHeader'>
                    <h2 class='employeeName'>${name}</h2>
                    <p class='roleTitle'>Team Manager</p>
                </div>
                <div class='memberDetails'>
                    <h2 class='memberId'>ID# ${id}</h2>
                    <h2 class='memberOfficeNumber'>Office # ${officeNumber}</h2>
                    <h2 class='memberEmail'>Email: ${email}</h2>
                </div>
            </div>  
            `;
        } else if (index.github) {

            const {name, id, email, github} = index;

            return `
            <div class='memberCard'>
                <div class='memberCardHeader'>
                    <h2 class='employeeName'>${name}</h2>
                    <p class='roleTitle'>Engineer</p>
                </div>
                <div class='memberDetails'>
                    <h2 class='memberId'>ID# ${id}</h2>
                    <h2 class='memberGithub'><a href='github.com/${github}'>GitHub: ${github}</a></h2>
                    <h2 class='memberEmail'>Email: ${email}</h2>
                </div>
            </div>  
            `;
        } else if (index.school) {

            const {name, id, email, school} = index;

            return `
            <div class='memberCard'>
                <div class='memberCardHeader'>
                    <h2 class='employeeName'>${name}</h2>
                    <p class='roleTitle'>Intern</p>
                </div>
                <div class='memberDetails'>
                    <h2 class='memberId'>ID# ${id}</h2>
                    <h2 class='memberSchool'>Studies at: ${school}</h2>
                    <h2 class='memberEmail'>Email: ${email}</h2>
                </div>
            </div>  
            `;
        }
    });

    return memberCard.join('');
};

const generateHTML = (userInput) => {
    return `
    <!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, inital-scale=1.0'>
        <title>Team Portfolio</title>
        <link rel='stylesheet' href='./style.css' />
    </head>
    <body>
        <header>
            <h1 class='headerTitle'>My Team's Portfolio</h1>
        </header>
        <main>
            ${generateMemberCards(userInput)}
        </main>
        <footer>
            <h3>&copy; ${new Date().getFullYear()} by Mia LaFleur</h3>
        </footer>
    </body>
    </html>
    `;
};

module.exports = generateHTML;