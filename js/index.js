//formulario para criar um novo grupo
new_team .onclick = () => {
    formulario.classList.add('show');
    layer.classList.add('overlay_show');
}
exit_form .onclick = () => {
    formulario.classList.remove('show');
    layer.classList.remove("overlay_show");
}
layer .onclick = () => {
    formulario.classList.remove('show');
    layer.classList.remove('overlay_show');
}
//------------------------------------


//criar novo grupo
let list_names = []
function criar_team() {

    let lista_teams = document.getElementById('list_of_teams');
    let nome_team = document.getElementById('name_team');
    let nome_value = nome_team.value;
    let capacity =  document.getElementById('capacity');
    let capacity_value = capacity.value;
    list_names.push(nome_value)

    if (nome_value == '' || nome_value in list_names) {
        nome_team.style.backgroundColor ='#C81C6FD5';
        nome_team.style.borderColor = 'white';

    }
    else if (capacity_value == '' || capacity_value < 2 || capacity_value > 10) {
        capacity.style.backgroundColor = '#C81C6FD5';
        capacity.style.borderColor = 'white';

    }
    else {
        lista_teams.innerHTML += `
        <li id = "card_team" class = "card_team">
            <div id="name_team_user">
                <h3 id="name_team_text">${nome_value}</h3>
                <i class="fa-solid fa-eye" id='icon_eye'></i>
            </div>
            <div id="count_users">
                <h1>0</h1>
                <h6>/ ${capacity_value}</h6>
            </div>
            <div id="add_user_exit">
                <button id="add_user" onclick="add_user()">Adicionar</button>
                <button id="exit_user" onclick="close_team()">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        </li>
    `;
    formulario.classList.remove('show');
    layer.classList.remove('overlay_show');
    }
    event.preventDefault();
} function close_team() {    //excluir grupo
    let team =  document.getElementById('card_team');
    team.remove('card_team')
    event.preventDefault()
}
//---------------------------------------------


//formulario adicionar usuario
function add_user() {
    let section_form_user = document.getElementById('section_add_user')
    section_form_user.innerHTML = `
    <form  id="form_add">
            <h3>Adicionar participantes<box-icon name="x" id="exit_form" onclick="close_form()"></box-icon></h3>
            <label for="name_user">Nome do Participante</label>
            <input type="text" required id="name_user">
            <button type="submit" onclick="add_user_group()">Criar</button>
        </form>
    `
    
} function close_form() { //fechar o formulario
    let form_user = document.getElementById('form_add')
    form_user.remove('form_add')

} function add_user_group() {



}