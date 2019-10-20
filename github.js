class GitHub {
    constructor() {
        this.client_id ='15c3eadd940975eb2c8c';
        this.client_secret = 'eca5a4eef417157849f2e4b59c9a3b8fffcb9025';
        this.repos_count = 5;
        this.sorts = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.sorts}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}
