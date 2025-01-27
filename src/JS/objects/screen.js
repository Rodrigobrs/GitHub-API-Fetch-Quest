const screen = {
    userProfile:document.querySelector('.profile-data'), 
    renderUser(user){
        this.userProfile.innerHTML = `
        <div class="info">
            <img src="${user.avatarUrl}" alt="Foto de perfil do usuário"/>
            <div class="data">
                <h1>${user.name ?? 'Não há um nome cadastrado'}</h1>
                <p class="follows"><span>👥Seguidores:${user.followers}</span> <span>👤Seguindo:${user.following}</span></p>
                <p>${user.bio ?? 'Não há uma bio cadastrada'}</p>
            </div>
        </div>
        `

        let repositoriesItens = ""

        user.repositories.forEach(repo => repositoriesItens +=`<li><a href="${repo.html_url}" target="_blank" >${repo.name}<div class="repo-data"><span>🍴${repo.forks_count}</span><span>🌟${repo.stargazers_count}</span><span>👁️‍🗨️${repo.watchers_count}</span><span class="language">💻${repo.language ?? '?'}</span></div></a></li>` )

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `
                                            <div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>
                                        `
        }

        let eventItens = ""

        user.events.forEach(event => eventItens += `<li><span class="event-list">${event.repo.name}</span>-<span>${event.payload.commits?.[0]?.message ?? 'Sem mensagem de commit!'}</span></li>`)

        if(user.events.length > 0 ){
            this.userProfile.innerHTML +=`
                                        <div class="events">
                                            <h2>Eventos</h2>
                                            <ul>${eventItens}</ul>
                                        </div>
                                        `
        }
    },
    renderNotFound(){
        this.userProfile.innerHTML = '<h2 class="Not-Found">Usuário não encontrado!</h2>'
    }
}

export { screen }