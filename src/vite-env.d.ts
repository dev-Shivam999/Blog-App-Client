/// <reference types="vite/client" />
interface postInput {
    name: string,
    email: string,
    img: string,
    password: string
}


interface BlogCard {
    id: string,
    authorName: string,
    authorPic: string,
    title: string,
    content: string,
    publishedDate: string,
    avatar: string,
    img?: string
    type?: string
    BlogerId:string
    Like: Link[]

}

interface blogs {
    id: string,
    title: string,
    content: string,
    Likes: Link[],
    created: string,
    authoreId: string,
    avtar: string
    authore: {
        name: string, img: string, id: string
    }
}


interface blog {
    id: string,
    title: string,
    content: string,
    created: string,
    authoreId: string,
    avtar: string
    Likes: Link[],

}
type Link={
    blogerId:string
}
interface user {
    name: string,
    img: string
    data: number
    id: number
    Likes:Link[]
    Link?:Link[]
    blogs: blog[],
    Followers: [],
    Following: [],

}
interface InitialState2 {

    b: {
        blogs: blogs[],
        loading: boolean,
        val: boolean,
    }
    c: Info2

}
interface InitialState {

    blogs: blogs[],
    loading: boolean,
    val: boolean,

}


interface Info {
    data: boolean,
    user: user
}
interface Info2 {
    Loading: boolean,
    data: boolean,
    user: user
}
interface Follow {
    id: string
}