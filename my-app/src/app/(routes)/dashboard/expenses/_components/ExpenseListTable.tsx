import { db } from '@/utils/dbConfig';
import { Expenses } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import { Trash } from 'lucide-react'
import React, { useEffect } from 'react'
import { toast } from 'sonner';

const ExpenseListTable = ({ expensesList,refreshData }: any) => {

    const deleteExpense = async({expense}: any) => {
        const result = await db.delete(Expenses)
        .where(eq(Expenses.id,expense.id))
        .returning();

        if(result){
            toast('Expense Deleted')
            refreshData();
        }

    }
    return (
      <div className="mt-3">
        <div className="grid grid-cols-4 bg-slate-200 p-2 font-bold">
          <h2>Name</h2>
          <h2>Amount</h2>
          <h2>Date</h2>
          <h2>Action</h2>
        </div>
  
        {expensesList.length > 0 ? (
          expensesList.map((expense: any, index: number) => (
            <div key={expense.id} className="grid grid-cols-4 bg-slate-50 p-2">
              <h2>{expense.name}</h2>
              <h2>{expense.amount}</h2>
              <h2>{expense.createdAt}</h2>
              <h2>
                <Trash className="text-red-600 cursor-pointer"
                onClick={() => deleteExpense({expense})} />
              </h2>
            </div>
          ))
        ) : (
          <div className="p-4 text-center text-gray-500">No expenses found.</div>
        )}
      </div>
    );
  };

export default ExpenseListTable