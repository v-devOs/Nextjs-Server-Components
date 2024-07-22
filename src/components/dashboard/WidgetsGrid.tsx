'use client';
import { useAppSelector } from '@/store';
import { SimpleWidget } from './SimpleWidget'
import { IoCartOutline } from 'react-icons/io5';

export const WidgetsGrid = () => {

  const count = useAppSelector( state => state.counter.count)

  return (
    <div className="flex flex-wrap p-2 ">

      <SimpleWidget
        title={`${count}`}
        href='/dashboard/counter'
        icon={ <IoCartOutline size={70} className="text-blue-500"/>}
        label='Contador'
        subtitle='Productos agregados'
      
      />
    </div>
  )
}
