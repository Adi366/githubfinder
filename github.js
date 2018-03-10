class GitHub{

    constructor(){
        this.client_id = '3cbf75b9e6441484f978';
        this.client_secret = 'd46f275cc356a2436acafa78a073a909296ad190';
        this.repo_count = 5;
        this.repo_sort = 'created: asc'
    }

async getUser(user){

    const profileResponse = await fetch(`https://api.github.com/users/${user}?${this.client_id}&${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}&${this.client_id}&${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return {
        profile,
        repos
    }

}

}