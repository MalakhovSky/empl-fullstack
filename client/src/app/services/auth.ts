import { User } from '@prisma/client';
import {api} from './api'

export type UserData = Omit<User, 'id'>
type ResponseLoginData = User & {token:string}

export const authApi = api.injectEndpoints({
  endpoints: (builder)=>({
    login: builder.mutation({
      query: (userData)=>({
        url: '/user/login',
        method: 'POST',
        body: userData
      })
    })
  })
})