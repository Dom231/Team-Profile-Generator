function createTeam(engineerArr,internArr){
    let html = ` `;
    for (let i= 0; i<engineerArr.length;i++){
        createEngineers(engineerArr[i])

    }
    for (let i= 0; i<internArr.length;i++){
        createInterns(internArr[i])

    }
    function createInterns(intern){
        html += `<div class = "engineer col-lg-3 d-inline-block">
        <header style = "background-color: blue;">Intern</header>
        <ul>${intern.getname()}</ul>
        <ul>${intern.getid()}</ul>
        <ul>${intern.getemail()}</ul>
        <ul>${intern.getgithub()}</ul>
        </div>`
    }
    function createEngineers(engineer){
        html += `<div class = "engineer col-lg-3 d-inline-block">
        <header style = "background-color: blue;">Engineer</header>
        <ul>${engineer.getname()}</ul>
        <ul>${engineer.getid()}</ul>
        <ul>${engineer.getemail()}</ul>
        <ul>${engineer.getgithub()}</ul>
        </div>`
    }
    return html
}

const htmlGenerater = (managerArr,engineerArr,internArr) =>
`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="Assets/style.css" />
    <script
      src="https://code.jquery.com/jquery-3.5.1.min.js"
      integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
      crossorigin="anonymous"
    ></script>
    <title>Team Profile Generater</title>
  </head>
  <body>
    <nav class="jumbotron">
      <h1>Team</h1>
    </nav> 

   
    
    <div class ="container-fluid my-5">
    
    
        <div id = "team">

        <div class = "manager col-lg-3 d-inline-block" >
        <header style = "background-color: blue;">Team Manager</header>
        <ul>${managerArr[0].getname()}</ul>
        <ul>${managerArr[0].getid()}</ul>
        <ul>${managerArr[0].getemail()}</ul>
        <ul>${managerArr[0].getoffice()}</ul>

        </div>
        ${createTeam(engineerArr,internArr)}

        

       
    
        
        </div>
       
  </div>
    
  </body>

  

    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
    <script  src="Assets/style.js"></script>
  </body>
</html>`;

module.exports = htmlGenerater