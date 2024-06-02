import { Hono } from "hono";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";
import {cors } from 'hono/cors'



const app = new Hono<{
  Bindings:{
    DATABASE_URL: string;
    JWT_SECRET: string;
  }
  }> ();

app.use('/*', cors())  
app.route("api/v1/user",userRouter)
app.route("api/v1/blog", blogRouter);




export default app

//postgres://avnadmin:AVNS_6gE3HdULhxXeaE4M4dN@pg-2cd5bf36-mediumproject2.e.aivencloud.com:24516/defaultdb?sslmode=require

//postgres://avnadmin:AVNS_6gE3HdULhxXeaE4M4dN@pg-2cd5bf36-mediumproject2.e.aivencloud.com:24516/defaultdb?sslmode=require

//DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiMmVjNzI4NzItNTEwNi00NmM4LTljNGEtZjY5NDBlNzc1NWNlIiwidGVuYW50X2lkIjoiMmRlYTNjYjYwZDg1ZWM1OGQ2OGViNzZiYjRjOTk5ZTcwNjFjY2M5NGZjYWZmMTdhOWM0NGIxOGQ4NjdjNmNjYyIsImludGVybmFsX3NlY3JldCI6ImQ4NTYwNmEwLWMzN2ItNGNhOS1iZmM2LTM4YzZkNDcwOWI5MSJ9.KeqLhbJO-coqwhOopUWNt1C6VQA4P1J0R2GSc6H1uoo"