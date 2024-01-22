export function requireAuth() {
    const isLoggedIn = false;

    return new Promise((resolve, reject) => {
        if (!isLoggedIn) {
            reject({
                redirectTo: "/login",
                message: "User not authenticated",
            });
        } else {
            resolve(true);
        }
    });
}
