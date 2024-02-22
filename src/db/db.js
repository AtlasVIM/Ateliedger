export const TypeDB = ['Products', 'Materials', 'Machines']
export const TransactionTypeDB = ['Payment', 'Purchase', 'Sale']


export const TransactionsDB = [
    {
        id:1, 
        date:'2024-01-24',
        transactionType: 'sale', 
        type: 'machines', 
        name: 'Fokoos',
        quantity: 1,
        ammount: 120, 
    },
    {
        id:2,
        date:'2024-02-25', 
        transactionType: 'purchase', 
        type: 'machines', 
        name: 'Halot One',
        quantity: 1,
        ammount: 150, 
    },
    {
        id:3, 
        date:'2024-01-30', 
        transactionType: 'purchase', 
        type: 'materials', 
        name: 'Creality Resin Gray 1KG',
        quantity: 2,
        ammount: 60, 
        },
]

export const MaterialsDB = [
    {
        id:1,
        name:'JAYO WHITE PLA',
        price:22,
        quantity:1000,
        unit:'Gram',
    },
    {
        id:2,
        name:'ESUN WHITE RESIN ABS',
        price:30,
        quantity:1000,
        unit:'Gram',
    }
]

export const ProductsDB = [
    {
        id:1,
        name: 'Star Rail Sampo Bomb Earing',
        materials: 
        {materialObj: {} , quantity: 10}
    }
]