const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                          <img src="${user.avatarUrl}" alt="foto do perfil do usuário" />
                                          <div class="data">
                                              <h1>${user.name ?? 'Não possui nome cadastrado'}</h1>
                                              <p>${user.bio ?? 'Não possui  bio cadastrada'}</p>
                                              <p>👥 ${user.following} Seguindo ● ${user.followers} Seguidores</p>
                                          </div>
                                      </div>`
            
        let repositoriesItens, eventsItens
        repositoriesItens = eventsItens = ''

        user.repositories.forEach(repo => {
            repositoriesItens += `<li>
                                       <a href="${repo.html_url}" target="_blank">
                                            ${repo.name}
                                            <div class="repositories-features">
                                                    <span class="item">🍴 ${repo.forks_count}</span>
                                                    <span class="item">⭐ ${repo.stargazers_count}</span>
                                                    <span class="item">👀 ${repo.watchers}</span>
                                                    <span class="item">👨‍💻 ${repo.language ?? 'Sem linguagem'}</span>
                                            </div>
                                       </a>
                                  </li>`
        });

        user.events.repositoryName.forEach((item, id) => {
            eventsItens += `<li><span class="repository-name">${item}</span> <span>- ${user.events.eventMessage[id]}</span></li>`
        })

        this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Repositórios</h2>
                                            <ul>${repositoriesItens}</ul>
                                        <div>
                                        <div class="events-div">
                                            <h2 class="events-title">Eventos</h2>
                                            <ul>${eventsItens}</ul>
                                        <div>`
    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }