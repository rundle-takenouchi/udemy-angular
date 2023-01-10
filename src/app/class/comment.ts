import { User } from './user'
export class Comment {
    user: User
    message: string
    date: number
    key?: string
    isEdit: boolean

    constructor(
        // public user: User,
        // public message: string
        value: any
    ) {
        this.user = value.user
        this.message = value.message
        this.date = value.date || Date.now()
        if (value.key) {
            this.key = value.key
        }
    }
}
