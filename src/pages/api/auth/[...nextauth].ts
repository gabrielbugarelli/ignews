import { query as q } from 'faunadb'

import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

import { fauna } from '../../../services/fauna';

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read:user'
    }),
  ],
  
  callbacks: {

    async session (session) {
      try {
        const userActionSubscription = await fauna.query(
          q.Get(
            q.Intersection([
              q.Match(
                q.Index('subscription_by_user_ref'),
                q.Select(
                  "ref",
                  q.Get(
                    q.Match(
                      q.Index('user_by_email'),
                      q.Casefold(session.user.email),
                    )
                  )
                )
              ),
  
              q.Match(
                q.Index('subscription_by_status'),
                "active"
              )
            ])
          )
        )
  
        return {
          ...session,
          activeSubscription: userActionSubscription
        }
      } 
      
      catch {
        return {
          ...session,
          activeSubscription: null
        }
      }
    },

    async signIn(user, account, profile) {
      const { email } = user;

      try {
        //Save email on database FaunaDB
        await fauna.query(
          q.Create(
            q.Collection('users'),
            {data: { email }}
          )
        )

        return true;
      } catch {
        return false;
      }
    }
  }
});