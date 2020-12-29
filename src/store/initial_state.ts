
export interface product_Type {
    id: number,
    title: string,
    description: string,
    price: number,
    imageURL: string,
    added: boolean
};

const INITIAL_STATE: product_Type[] = [
    {
        id: 1,
        title: 'Black jacket',
        description: 'Black jacket for Men, Best choice for full winter collection',
        price: 125,
        imageURL: `https://github.com/Ubaid-Ali/basket-redux/blob/master/src/images/Black-jacket.jpg?raw=true`,
        added: false
    },
    {
        id: 2,
        title: 'black-and-white-jacket',
        description: 'black-and-white-jacket for Men, Best choice for full winter collection',
        price: 205,
        imageURL: 'https://github.com/Ubaid-Ali/basket-redux/blob/master/src/images/black-and-white-jacket.jpeg?raw=true',
        added: false
    },
    {
        id: 3,
        title: 'Brown Sleeve Solid Jacket',
        description: 'Brown Sleeve Solid Jacket for Men, Best choice for full winter collection',
        price: 199,
        imageURL: 'https://github.com/Ubaid-Ali/basket-redux/blob/master/src/images/Brown%20Sleeve%20Solid%20Jacket.jpeg?raw=true',
        added: false
    },
    {
        id: 4,
        title: 'dark-black-jacket',
        description: 'dark-black-jacket for Men, Best choice for full winter collection',
        price: 180,
        imageURL: 'https://github.com/Ubaid-Ali/basket-redux/blob/master/src/images/dark-black-jacket.jpeg?raw=true',
        added: false
    },
    {
        id: 5,
        title: 'dark-purple-jacket',
        description: 'dark-purple-jacket for Men, Best choice for full winter collection',
        price: 227,
        imageURL: 'https://github.com/Ubaid-Ali/basket-redux/blob/master/src/images/dark-purple-jacket.jpeg?raw=true',
        added: false
    },
    {
        id: 6,
        title: 'gray-jacket',
        description: 'gray-jacket for Men, Best choice for full winter collection',
        price: 145,
        imageURL: 'https://github.com/Ubaid-Ali/basket-redux/blob/master/src/images/gray-jacket.jpeg?raw=true',
        added: false
    },
    {
        id: 7,
        title: 'Hoodies Cotton Long Sleeve Solid Jacket',
        description: 'Hoodies Cotton Long Sleeve Solid Jacket for Men, Best choice for full winter collection',
        price: 300,
        imageURL: 'https://github.com/Ubaid-Ali/basket-redux/blob/master/src/images/Hoodies%20Cotton%20Long%20Sleeve%20Solid%20Jacket.jpeg?raw=true',
        added: false
    },
    {
        id: 8,
        title: 'nike-blue-gray-jacket',
        description: 'nike-blue-gray-jacket for Men, Best choice for full winter collection',
        price: 160,
        imageURL: 'https://github.com/Ubaid-Ali/basket-redux/blob/master/src/images/nike-blue-gray-jacket.jpeg?raw=true',
        added: false
    },
    {
        id: 9,
        title: 'Nike Kobe Full Zip',
        description: 'Nike Kobe Full Zip for Men, Best choice for full winter collection',
        price: 170,
        imageURL: 'https://github.com/Ubaid-Ali/basket-redux/blob/master/src/images/Nike%20Kobe%20Full%20Zip.jpeg?raw=true',
        added: false
    },
    {
        id: 10,
        title: 'Noelito Flow',
        description: 'Noelito Flow, Best choice for full winter collection',
        price: 137,
        imageURL: 'https://github.com/Ubaid-Ali/basket-redux/blob/master/src/images/Noelito%20Flow.jpeg?raw=true',
        added: false
    },
    {
        id: 11,
        title: 'red-jacket',
        description: 'red-jacket, Best choice for full winter collection',
        price: 210,
        imageURL: 'https://github.com/Ubaid-Ali/basket-redux/blob/master/src/images/red-jacket.jpeg?raw=true',
        added: false
    },
    {
        id: 12,
        title: 'We Know Game casual',
        description: 'We Know Game casual, Best choice for full winter collection',
        price: 186,
        imageURL: 'https://github.com/Ubaid-Ali/basket-redux/blob/master/src/images/We%20Know%20Game%20casual.jpeg?raw=true',
        added: false
    },
    {
        id: 13,
        title: 'white-jacket',
        description: 'white-jacket, Best choice for full winter collection',
        price: 190,
        imageURL: 'https://github.com/Ubaid-Ali/basket-redux/blob/master/src/images/white-jacket.jpeg?raw=true',
        added: false
    }
];
export { INITIAL_STATE };