import * as z from 'zod';

export const UserValidation = z.object({
    profile_photo:z.string().url().refine((data)=> data.trim()!=='',{message:'You need a profile picture'}),
    name:z.string().min(3,{message:'Minimum 3 characters'}).max(30, {message:'Too many characterss'}),
    username:z.string().min(3,{message:'Minimum 3 characters'}).max(30, {message:'Too many characterss'}),
    bio:z.string().min(2,{message:'Minimum 2 characters'}).max(1000, {message:'Too many characterss'}),
})