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
      <p className="text-lg font-medium leading-tight tracking-tight">Plan</p>

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
      <div className="flex items-center justify-between rounded-md bg-gray-100 p-4">
        <p
          className={classNames(
            level === 1 ? '' : '',
            level === 2 ? 'text-sm' : '',
            level === 3 ? 'text-xs' : '',
            `font-medium leading-tight tracking-tight`
          )}
        >
          {title}
        </p>

        <button onClick={() => handleOnDelete(id)}>
          <PiXBold className="h-4 w-4 text-red-600" />
        </button>
      </div>

      <div className="ml-8 mt-2 space-y-1">
        {children.map((child) => (
          <PlanItemComponent key={child.title} planItem={child} />
        ))}
      </div>
    </div>
  )
}
