/**
 * install jsonwebtoken
 * jwt.sign(payload, secret, {expiresIn:})
 * token send to client
 */

/**
 * how to store token in the client side
 * 1. memory --> okay type
 * 2. localStorage --> okay type(XSS)
 * 3. cookies --> http only
 */

/**
 * 1. create a random value of 64bits by use
 *    require('crypto').randomBytes(64).toString('hex')
 * 
 * 2. set cookie http only. for development secure: false
 * 
 * 3. cors setting
 * 
 * app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true   // it is very important for send cookie to client
}));
 * 
 * 
 * 4. client side axios settings
 * 
 * in axios set withCredentials: true
 * 
 * 
 */

/**
 * 1. to send cookies from the client make sure you added withCredentials: true
 * for the api call using axios
 * 
 * 2. use cookie parser as middle ware in server side
 * 3. req.cookie.token
 */