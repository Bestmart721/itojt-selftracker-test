import * as oidc from "oidc-client-ts";

export default class AuthService {
    constructor() {
        const settings = {
            authority: "https://login.microsoftonline.com",
            client_id: "26581cea-19ca-4e02-8e64-68676836db6c",
            redirect_uri: "http://localhost:3000/",
            automaticSilentRenew: true,
            silent_redirect_uri:"https://localhost:3000/silent-renew.html",
            response_type: "code",
            scope: 'openid profile',
            post_logout_redirect_uri: 'https://localhost:3000/',
            filterProtocolClaims: true,        
        }
        this.userManager = new oidc.UserManager(settings)
    }
    getUser() {
        return this.userManager.getUser()
    }
    login() {
        return this.userManager.signinRedirect()
    }
    logout() {
        return this.userManager.signoutRedirect()
    }
    getUser() {
        return this.userManager.getUser()
    }
    getAccessToken() {
        return this.userManager.getUser().then(
            (data) => {
                return data.access_token
            }
        )
    }

}


oidc.Log.setLogger(console)
oidc.Log.setLevel(oidc.Log.INFO)

console.log(new AuthService().userManager)
