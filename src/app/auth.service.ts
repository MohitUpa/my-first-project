
export class AuthService {
    loggedIn = false;

    isAuthenticate() {
        const promise = new Promise(
            (resolve, rejects) => {
                setTimeout(() => {resolve(this.loggedIn)},300);
            }
        );
        return promise;
    }
    login() {
        this.loggedIn = true;
    }
    logout() {
        this.loggedIn = false;
    }
}