import { Request, Response } from 'express'
import { isAuthenticated } from '../util/passport'
import User, { UserObject, SubscriptionsObject } from '../models/User'
import { Controller } from './Controller'

export class PushServiceController extends Controller {
    constructor(path: string) {
        super(path)
        this.#initializeRoutes()
    }
    #initializeRoutes = () => {
        // * This is subscribing for push notifications and not specific classes
        // * This route is triggered when a user logs in to save subscription obj to the database
        this.router.post(
            '/save-client-subscriptions',
            isAuthenticated,
            async (req: Request, res: Response) => {
                // * Grab user id from session
                const _id = (req.user as UserObject)._id

                try {
                    // * Grab user subscription object from post request
                    const subscriptionObject = JSON.parse(
                        req.body.subscription
                    ) as SubscriptionsObject

                    //* Add subscription object to user's array of subscription objets
                    await User.updateOne(
                        { _id },
                        { $push: { subscriptionObjects: subscriptionObject } }
                    )
                } catch (err) {
                    console.error(err.message)
                    res.status(500).send(err.message)
                    return
                }

                res.status(200).send('Client Subscription Successful')
            }
        )

        // * This is unsubscribing for push notifications and not specific classes
        // * Route is triggered when user logs out
        this.router.post(
            '/unsubscribe-client',
            isAuthenticated,
            async (req: Request, res: Response) => {
                // * Grab user id from session
                const _id = (req.user as UserObject)._id

                try {
                    // * Grab user subscription object from post request
                    const subscriptionObject = JSON.parse(
                        req.body.subscription
                    ) as SubscriptionsObject

                    if (subscriptionObject !== null)
                        //* Remove subscription object to user's array of subscription objets
                        await User.updateOne(
                            { _id },
                            { $pull: { subscriptionObjects: subscriptionObject } }
                        )
                } catch (err) {
                    console.error(err.message)
                    res.status(500).end()
                    return
                }

                res.status(200).send('Client Unsubscription Successful')
            }
        )
    }
}
