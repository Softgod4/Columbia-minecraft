import type { AuthOptions } from 'next-auth'
import DiscordProvider from 'next-auth/providers/discord'

export const authConfig: AuthOptions = {
    providers: [
        DiscordProvider({
            clientId: "1128648473168855122" as string,
            clientSecret: "0IghmPlTUCXOahXL6232XdhglVpNFn5E" as string,
        })
    ]
}