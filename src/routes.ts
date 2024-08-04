/** An array of routes that are accesible to the public  
 * These routes do not require authentication
 * @type {string[]}
*/

export const publicRoutes = [
  "/", "/about" , "/contact" 
]

/** An array of routes that are accesible to the public  
 * These routes will redirect loggoed in users to /settings or the page you choose
 * @type {string[]}
*/
export const authRoutes = [
    "/auth/login",
    "/auth/register",
]


/** The prefix for API authentication routes 
 *  Routes that start with this prefix are use for API authentication purposes
 * @type {string}
*/


export const apiAuthPrefix = "/api/auth"


/** 
 *  The default redirect path after loggin in 
 * @type {string}
*/

export const DEFAULT_LOGIN_REDIRECT = "/settings"