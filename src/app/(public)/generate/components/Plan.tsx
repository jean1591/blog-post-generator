'use client'

import { useDispatch, useSelector } from 'react-redux'

import { PiXBold } from 'react-icons/pi'
import { PlanItem } from '@/types/generator'
import { RootState } from '@/store/store'
import { classNames } from '@/utils/classNames'
import { deleteItemFromPlan } from '@/store/features/generator/slice'

export const Plan = () => {
  const { plan } = useSelector((state: RootState) => state.generator)

  return (
    <div className="rounded-xl bg-gray-200 p-4 md:p-8">
      <p className="text-2xl font-bold leading-tight tracking-tight">Plan</p>

      <div className="mt-8 space-y-8">
        {plan.map((planItem) => (
          <PlanItemComponent key={planItem.id} planItem={planItem} />
        ))}
      </div>
    </div>
  )
}

const PlanItemComponent = ({ planItem }: { planItem: PlanItem }) => {
  const dispatch = useDispatch()

  const { children, id, level, title } = planItem

  const handleOnDelete = (id: string) => {
    dispatch(deleteItemFromPlan(id))
  }

  return (
    <div>
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
          onClick={() => handleOnDelete(id)}
          className="absolute right-0 top-0 m-4 hidden group-hover:block"
        >
          <PiXBold className="h-4 w-4 text-red-600" />
        </button>
      </div>

      <div className="ml-12 mt-2 space-y-1">
        {children.map((child) => (
          <PlanItemComponent key={child.title} planItem={child} />
        ))}
      </div>
    </div>
  )
}
