'use client'

import {
  addNewSection,
  deleteItemFromPlan,
} from '@/store/features/generator/slice'
import { useDispatch, useSelector } from 'react-redux'

import { PiXBold } from 'react-icons/pi'
import { PlanItem } from '@/types/generator'
import { RootState } from '@/store/store'
import { classNames } from '@/utils/classNames'
import { useState } from 'react'

export const Plan = () => {
  const { plan } = useSelector((state: RootState) => state.generator)

  return (
    <div className="rounded-xl bg-gray-200 p-4 md:p-8">
      <p className="text-2xl font-bold leading-tight tracking-tight">
        Table of content
      </p>

      <div className="mt-8 space-y-8">
        {plan.map((planItem) => (
          <PlanItemComponent key={planItem.id} planItem={planItem} />
        ))}
      </div>
    </div>
  )
}

const PlanItemComponent = ({ planItem }: { planItem: PlanItem }) => {
  const [displayAddNewItem, setDisplayAddNewItem] = useState<boolean>(false)
  const [newItemTitle, setNewItemTitle] = useState<string | undefined>(
    undefined
  )
  const dispatch = useDispatch()

  const { children, id, level, title } = planItem

  const handleDisplayAddNewItem = () => {
    setDisplayAddNewItem(!displayAddNewItem)
  }

  const handleCancelAddNewItem = () => {
    setNewItemTitle(undefined)
    setDisplayAddNewItem(!displayAddNewItem)
  }

  const handleAddNewItem = () => {
    setNewItemTitle(undefined)
    dispatch(addNewSection({ title: newItemTitle ?? '', id }))
    setDisplayAddNewItem(!displayAddNewItem)
  }

  return (
    <div className="relative">
      <div className="group relative flex items-center justify-between rounded-lg bg-gray-100 p-4">
        <p
          className={classNames(
            level === 1 ? 'font-semibold' : '',
            level === 2 ? 'text-sm font-medium' : '',
            level === 3 ? 'text-xs font-medium' : '',
            'leading-tight tracking-tight'
          )}
        >
          {title}
        </p>

        <button
          onClick={() => dispatch(deleteItemFromPlan(id))}
          className="absolute right-0 top-0 m-4 hidden group-hover:block"
        >
          <PiXBold className="h-4 w-4 text-red-600" />
        </button>
      </div>

      <div className="mt-2 space-y-1 pl-12">
        {children.map((child) => (
          <PlanItemComponent key={child.id} planItem={child} />
        ))}
      </div>

      {level === 1 && !displayAddNewItem ? (
        <div className="mt-1 pl-12">
          <button
            className="w-full rounded-lg bg-gray-100 p-4 text-left text-sm font-medium leading-tight tracking-tight text-gray-400"
            onClick={handleDisplayAddNewItem}
          >
            Add new section
          </button>
        </div>
      ) : null}

      {level === 1 && displayAddNewItem ? (
        <div className="ml-12 mt-2 flex items-center justify-between gap-2 rounded-lg bg-gray-100 px-4 py-2">
          <input
            onChange={(e) => setNewItemTitle(e.target.value)}
            className="w-2/3 rounded-md bg-gray-100 p-2 text-sm font-medium leading-tight tracking-tight ring-1 ring-gray-300"
            type="text"
            placeholder="New section title"
          />
          <button
            className="w-1/6 rounded-md bg-black p-1 text-sm leading-tight tracking-tight text-white"
            onClick={handleCancelAddNewItem}
          >
            Cancel
          </button>
          <button
            disabled={newItemTitle === undefined || newItemTitle === ''}
            className="w-1/6 rounded-md p-1 text-sm leading-tight tracking-tight ring-1 ring-gray-500"
            onClick={handleAddNewItem}
          >
            Add
          </button>
        </div>
      ) : null}
    </div>
  )
}
