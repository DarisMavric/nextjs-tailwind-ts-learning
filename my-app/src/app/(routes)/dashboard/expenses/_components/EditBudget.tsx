"use client"

import { Button } from '@/components/ui/button'
import { PenBox } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
import EmojiPicker from 'emoji-picker-react';
import { useUser } from '@clerk/nextjs';
import { Input } from '@/components/ui/input';
import { Budgets } from '@/utils/schema';
import { db } from '@/utils/dbConfig';
import { toast } from 'sonner';
import { eq } from 'drizzle-orm';

const EditBudget = ({budgetInfo,refreshData}: any) => {

    if (budgetInfo.length !> 0) {
        return <div>Loading...</div>; // Or some loading spinner
      }

    const [emojiIcon, setEmojiIcon] = useState(budgetInfo.icon);
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);

  const [name, setName] = useState(budgetInfo.name);
  const [amount, setAmount] = useState(budgetInfo.amount);

  const { user } = useUser();

  const onUpdateBudget = async() => {
    const result = await db.update(Budgets).set({
        name:name,
        amount:amount,
        icon:emojiIcon
    }).where(eq(Budgets.id,budgetInfo.id))
    .returning();

    if(result){
        refreshData();
        toast('Budget Updated');
    }
  }

  return (
    <div>
        <Dialog>
        <DialogTrigger asChild>
        <Button className='flex gap-2'><PenBox/>Edit</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update New Budget</DialogTitle>
              <div className="mt-5 pt-5">
                <Button
                  variant="outline"
                  className="text-lg"
                  onClick={() => setOpenEmojiPicker(!openEmojiPicker)}
                >
                  {emojiIcon}
                </Button>
                <div className="absolute z-20">
                  <EmojiPicker
                    open={openEmojiPicker}
                    onEmojiClick={(e) => {
                      setEmojiIcon(e.emoji);
                      setOpenEmojiPicker(false);
                    }}
                  />
                </div>
                <div className="mt-2">
                  <h2 className="text-black font-medium my-1">Budget Name</h2>
                  <Input
                    placeholder="e.g Home Decor"
                    defaultValue={budgetInfo.name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mt-2">
                  <h2 className="text-black font-medium my-1">Budget Amount</h2>
                  <Input
                    type="number"
                    defaultValue={budgetInfo?.amount}
                    placeholder="e.g 5000$"
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              </div>
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
            <Button
                  onClick={() => onUpdateBudget()}
                  disabled={!(name && amount)}
                  className="mt-5 w-full"
                >
                  Update Budget
                </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default EditBudget