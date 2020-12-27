
export interface product_Type {
    id: string,
    title: string,
    description: string,
    price: number,
    imageURL: string,
    added: boolean
};

const INITIAL_STATE: product_Type[] = [
    {
        id: 'Black jacket',
        title: 'Black jacket',
        description: 'Black jacket for Men, Best choice for full winter collection',
        price: 125,
        imageURL: '/images/logo.png',
        added: false
    },
    {
        id: 'black-and-white-jacket',
        title: 'black-and-white-jacket',
        description: 'black-and-white-jacket for Men, Best choice for full winter collection',
        price: 205,
        imageURL: '/images/black-and-white-jacket.jpeg',
        added: false
    },
    {
        id: 'Brown Sleeve Solid Jacket',
        title: 'Brown Sleeve Solid Jacket',
        description: 'Brown Sleeve Solid Jacket for Men, Best choice for full winter collection',
        price: 199,
        imageURL: '/images/Brown Sleeve Solid Jacket.jpeg',
        added: false
    },
    {
        id: 'dark-black-jacket',
        title: 'dark-black-jacket',
        description: 'dark-black-jacket for Men, Best choice for full winter collection',
        price: 180,
        imageURL: './images/dark-black-jacket.jpeg',
        added: false
    },
    {
        id: 'dark-purple-jacket',
        title: 'dark-purple-jacket',
        description: 'dark-purple-jacket for Men, Best choice for full winter collection',
        price: 227,
        imageURL: './images/dark-purple-jacket.jpeg',
        added: false
    },
    {
        id: 'gray-jacket',
        title: 'gray-jacket',
        description: 'gray-jacket for Men, Best choice for full winter collection',
        price: 145,
        imageURL: './images/gray-jacket.jpeg',
        added: false
    },
    {
        id: 'Hoodies Cotton Long Sleeve Solid Jacket',
        title: 'Hoodies Cotton Long Sleeve Solid Jacket',
        description: 'Hoodies Cotton Long Sleeve Solid Jacket for Men, Best choice for full winter collection',
        price: 300,
        imageURL: './images/Hoodies Cotton Long Sleeve Solid Jacket.jpeg',
        added: false
    },
    {
        id: 'nike-blue-gray-jacket',
        title: 'nike-blue-gray-jacket',
        description: 'nike-blue-gray-jacket for Men, Best choice for full winter collection',
        price: 160,
        imageURL: './images/nike-blue-gray-jacket.jpeg',
        added: false
    },
    {
        id: 'Nike Kobe Full Zip',
        title: 'Nike Kobe Full Zip',
        description: 'Nike Kobe Full Zip for Men, Best choice for full winter collection',
        price: 170,
        imageURL: './images/Nike Kobe Full Zip.jpeg',
        added: false
    },
    {
        id: 'Noelito Flow',
        title: 'Noelito Flow',
        description: 'Noelito Flow, Best choice for full winter collection',
        price: 137,
        imageURL: './images/Noelito Flow.jpeg',
        added: false
    },
    {
        id: 'red-jacket',
        title: 'red-jacket',
        description: 'red-jacket, Best choice for full winter collection',
        price: 210,
        imageURL: './images/red-jacket.jpeg',
        added: false
    },
    {
        id: 'We Know Game casual',
        title: 'We Know Game casual',
        description: 'We Know Game casual, Best choice for full winter collection',
        price: 186,
        imageURL: './images/We Know Game casual.jpeg',
        added: false
    },
    {
        id: 'white-jacket',
        title: 'white-jacket',
        description: 'white-jacket, Best choice for full winter collection',
        price: 190,
        imageURL: './images/white-jacket.jpeg',
        added: false
    }
];


export { INITIAL_STATE };