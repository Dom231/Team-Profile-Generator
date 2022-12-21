function createTeam(engineerArr,internArr){
    let html = ` `;
    for (let i= 0; i<engineerArr.length;i++){
        createEngineers(engineerArr[i])

    }
    for (let i= 0; i<internArr.length;i++){
        createInterns(internArr[i])

    }
    function createInterns(intern){
        html += `<div class = "intern col-lg-3 d-inline-block  border border-black" style=" background-color:whitesmoke" >
        <header class="panel-heading border border-black" style = "background-color: rgb(11, 112, 253);color: aliceblue;">
        <ul>${intern.getrole()}:  ${intern.getname()}</ul>
        </header>
        
        <ul class="panel-heading border border-black">ID: ${intern.getid()}</ul>
        <ul class="panel-heading border border-black" >
        <a href="mailto:${intern.getemail()}">Email: ${intern.getemail()}</a>
        </ul>
        <ul class="panel-heading border border-black">School: ${intern.getschool()}</ul>
        </div>`
    }
    function createEngineers(engineer){
        html += `<div class = "engineer col-lg-3 d-inline-block border border-black" style=" background-color:whitesmoke">

        <header class="panel-heading border border-black" style = "background-color: rgb(11, 112, 253);color: aliceblue;">
        <ul>${engineer.getrole()}:  ${engineer.getname()}</ul>
        </header>

        
        <ul class="panel-heading border border-black">ID: ${engineer.getid()}</ul>
        <ul class="panel-heading border border-black">
        <a href="mailto:${engineer.getemail()}">Email: ${engineer.getemail()}</a>
        </ul>
        <ul class="panel-heading border border-black">GitHub:
        <a href="https://github.com/${engineer.getgithub()}/"> ${engineer.getgithub()} </a>
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
    <nav class="jumbotron" style = "text-align: center;background-color: rgb(200, 82, 82);color: aliceblue;">
      <h1>Team</h1>
    </nav> 

   
    
    <div class ="container-fluid my-5" style = "text-align: center;">
    
    
        <div id = "team" p-3>

        <div class = "manager col-lg-3 d-inline-block  border border-black" style=" background-color:whitesmoke" >
        <header class="panel-heading border border-black"style = "background-color: rgb(11, 112, 253);color: aliceblue;">
        <ul>${managerArr[0].getrole()}:  ${managerArr[0].getname()}</ul>
        </header>
        <ul class="panel-heading border border-black">ID: ${managerArr[0].getid()}</ul>
      
        <ul class="panel-heading border border-black">
        <a href="mailto:${managerArr[0].getemail()}">Email: ${managerArr[0].getemail()}</a>
        </ul>
        <ul class="panel-heading border border-black">office number: ${managerArr[0].getoffice()}</ul>

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