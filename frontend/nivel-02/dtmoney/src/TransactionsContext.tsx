import { createContext, useEffect, useState, ReactNode} from 'react';
import { api } from './services/api';

interface Transaction{
    id:number,
    title:string,
    amount:number,
    category:string,
    type:string,
    createdAt: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionProviderPropos{
    children: ReactNode;
}

interface TransactionsContextData{
    transactions:Transaction[];
    createTransaction: (Transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
    );

export  function TransactionsProvider({children}: TransactionProviderPropos){

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('http://localhost:3000/api/transactions')
        .then(response => setTransactions(response.data.transactions))
    }, [])

    function createTransaction(transaction :TransactionInput){
        
        api.post('transactions', transaction)
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    );
}