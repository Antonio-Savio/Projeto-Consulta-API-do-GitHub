const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    following: '',
    followers: '',
    events: {
        repositoryName: [],
        eventMessage: []
    },
    repositories: [],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.following = gitHubUser.following
        this.followers = gitHubUser.followers
    },
    setRepositories(repositories){
        this.repositories = repositories
    },
    setEvents(events){
        this.events.repositoryName = []
        this.events.eventMessage = []
        
        events.forEach((event) => {
            this.events.repositoryName.push(event.repo.name)

            let commitExist = event.payload.commits
            if (commitExist){
                this.events.eventMessage.push(event.payload.commits[0].message)
            } else {
                this.events.eventMessage.push('❌ Não possui mensagem!')
            }
            
        })
    }
}

export { user }