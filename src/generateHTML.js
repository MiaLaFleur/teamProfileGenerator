const generateMemberCards = (userInput) => {

    const memberCard = userInput.map(index => {

        if (index.officeNumber) {
            const {name, id, email, officeNumber} = index;

            return `
            <div class='memberCard'>
                <div class='memberCardHeader'>
                    <h2 class='employeeName'>${name}</h2>
                    <p class='roleTitle'><i class="fa-solid fa-mug-hot"></i> Team Manager</p>
                </div>
                <div class='memberDetails'>
                    <p class='memberId'>ID# ${id}</p>
                    <p class='memberOfficeNumber'>Office # ${officeNumber}</p>
                    <p class='memberEmail'>Email: <a href="mailto: ${email}">${email}</a></p>
                </div>
            </div>  
            `;
        } else if (index.github) {

            const {name, id, email, github} = index;

            return `
            <div class='memberCard'>
                <div class='memberCardHeader'>
                    <h2 class='employeeName'>${name}</h2>
                    <p class='roleTitle'><i class="fa-solid fa-glasses"></i> Engineer</p>
                </div>
                <div class='memberDetails'>
                    <p class='memberId'>ID# ${id}</p>
                    <p class='memberGithub'>GitHub: <a href='github.com/${github}'>${github}</a></p>
                    <p class='memberEmail'>Email: <a href="mailto: ${email}">${email}</a></p>
                </div>
            </div>  
            `;
        } else if (index.school) {

            const {name, id, email, school} = index;

            return `
            <div class='memberCard'>
                <div class='memberCardHeader'>
                    <h2 class='employeeName'>${name}</h2>
                    <p class='roleTitle'><i class="fa-solid fa-user-graduate"></i> Intern</p>
                </div>
                <div class='memberDetails'>
                    <p class='memberId'>ID# ${id}</p>
                    <p class='memberSchool'>Studies at: ${school}</p>
                    <p class='memberEmail'>Email: <a href="mailto: ${email}">${email}</a></p>
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
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name='viewport' content='width=device-width, inital-scale=1.0'>
        <title>Team Portfolio</title>
        <link rel='stylesheet' href='./output.css' />
        <script src="https://kit.fontawesome.com/db87bb445e.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <header>
            <h1 class='headerTitle'>My Team</h1>
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