import * as dotenv from 'dotenv'
import { App } from './app'
import { HookController } from './controllers/HookController'
import { BannerController } from './controllers/BannerController'

dotenv.config()

const basePath = process.env.BANNER_BASE_PATH || '/banner'
const port = parseInt(process.env.BANNER_PORT) || 4001
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/registrum'

const app = new App([new HookController('/hook'), new BannerController('/')], {
    port,
    basePath,
    mongoUri
})

app.listen()
